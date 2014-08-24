'use strict';

var fn  = require('./function'),
    obj = require('./object');

function Stream(subscribe) {
  this.subscribe = subscribe;
}

Stream.prototype.constructor = Stream;

Stream.fromArray = function(a) {
  return new Stream(function(next, done) {
    // Compose with the identity function to strip off the other arguments
    // passed by the map function.
    a.map(fn.compose(next, fn.identity));
    return done();
  });
};

Stream.fromCallback = function(f) {
  return new Stream(function(next, done) {
    f(next);
  });
};

Stream.fromEvent = function(target, type) {
  return new Stream(function(next, done) {
    if (target.on) {
      target.on(type, next);
    } else if (target.addEventListener) {
      target.addEventListener(type, fn.compose(next, obj.get('detail')));
    }
  });
};

Stream.fromPromise = function(promise) {
  return new Stream(function(next, done) {
    promise.then(next);
  });
};

Stream.of = function(a) {
  return new Stream(
    function(next, done) {
      if (a) { next(a); }
      return done();
    }
  );
};

Stream.prototype.flatMap = function(f) {
  var env = this;
  return new Stream(function(next, done) {
    return env.subscribe(function(a) {
      return f(a).subscribe(next, function() {});
    }, done);
  });
};

// Stream.prototype.map = function(f) {
//   return this.flatMap(function(a) {
//     return Stream.of(f(a));
//   });
// };

Stream.prototype.map = function(f) {
  var env = this;
  return new Stream(function(next, done) {
    env.subscribe(fn.compose(next, f), done);
  });
};

Stream.prototype.filter = function(f) {
  var env = this;
  return new Stream(function(next, done) {
    return env.subscribe(function(a) {
      if (f(a)) { next(a); }
    }, done);
  });
};

Stream.prototype.fold = function(a, f) {
  var env = this;
  return new Stream(
    function(next, done) {
      return env.subscribe(
        function(b) {
          a = f(a, b);
          return a;
        },
        function() {
          next(a);
          return done();
        }
      );
    }
  );
};

Stream.prototype.scan = function(a, f) {
  var env = this;
  return new Stream(function(next, done) {
    next(a);
    env.subscribe(function(b) {
      a = f(a, b);
      return next(a);
    }, done);
  });
};

Stream.prototype.merge = fn.variadic(function(as) {
  var env = this;
  return new Stream(function(next, done) {
    var count = 0;
    var onDone = function() {
      if (fn.gt(++count, as.length)) {
        done();
      }
    };
    env.subscribe(next, onDone);
    as.map(function(a) {
      a.subscribe(next, onDone);
    });
  });
});

module.exports = Stream;

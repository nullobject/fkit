'use strict';

var fn  = require('./function'),
    obj = require('./object');

function Stream(subscribe) {
  this.subscribe = subscribe;
}

Stream.prototype.constructor = Stream;

Stream.fromArray = function(a) {
  return new Stream(function(next, done) {
    a.map(fn.compose(next, fn.identity));
    return done();
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

Stream.prototype.map = function(f) {
  var env = this;
  return new Stream(function(next, done) {
    env.subscribe(fn.compose(next, f), done);
  });
};

Stream.prototype.scan = function(a, f) {
  var env = this;
  return new Stream(function(next, done) {
    env.subscribe(function(b) {
      a = f(a, b);
      return next(a);
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

module.exports = Stream;

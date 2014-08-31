/** @author Josh Bassett */

'use strict';

var fn   = require('./fn'),
    obj  = require('./obj'),
    util = require('./util');

/**
 * Creates a new stream with the `subscribe` function.
 *
 * The `subscribe` function is called by an observer who wishes to subscribe
 * to the stream values.
 *
 *
 * @class
 * @param {function} subscribe A subscribe function.
 */
function Stream(subscribe) {
  /**
   * Subscribes to the stream with the callbacks `next` and `end`.
   *
   * @param {function} next A callback function.
   * @param {function} end A callback function.
   * @function Stream#subscribe
   */
  this.subscribe = subscribe;
}

Stream.prototype.constructor = Stream;

/**
 * Creates a new stream from the array `as`.
 *
 * @param {Array} as An array of values.
 * @returns {Stream} A new stream.
 */
Stream.fromArray = function(as) {
  return new Stream(function(next, done) {
    as.map(fn.unary(next));
    done();
  });
};

/**
 * Creates a new stream from the callback function `f`.
 *
 * @param {function} f A callback function.
 * @returns {Stream} A new stream.
 */
Stream.fromCallback = function(f) {
  return new Stream(function(next, done) {
    f(next);
  });
};

/**
 * Creates a new stream by listening for events of `type` on the `target` object.
 *
 * @param {Element} target A DOM element.
 * @param {string} type A string representing the event type to listen for.
 * @returns {Stream} A new stream.
 */
Stream.fromEvent = function(target, type) {
  return new Stream(function(next, done) {
    if (target.on) {
      target.on(type, next);
    } else if (target.addEventListener) {
      target.addEventListener(type, fn.compose(next, obj.get('detail')));
    }
  });
};

/**
 * Creates a new stream from the promise `p`.
 *
 * @param {Promise} p A Promises/A+ conformant promise.
 * @returns {Stream} A new stream.
 */
Stream.fromPromise = function(p) {
  return new Stream(function(next, done) {
    p.then(next);
  });
};

/**
 * Creates a new stream that contains a single value `a`.
 *
 * @param {*} a A value.
 * @returns {Stream} A new stream.
 */
Stream.of = function(a) {
  return new Stream(function(next, done) {
    if (a) { next(a); }
    done();
  });
};

/**
 * Creates a new stream that applies the function `f` to the values in the
 * stream. The unary function `f` must return a {@link Stream}.
 *
 * @param {function} f A unary function.
 * @returns {Stream} A new stream.
 */
Stream.prototype.flatMap = function(f) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      env.subscribe(function(a) {
        f(a).subscribe(next, function() {});
      }, done);
    }
  });
};

/**
 * Creates a new stream that applies the function `f` to the values in the
 * stream. The unary function `f` must return a stream value.
 *
 * @param {function} f A unary function.
 * @returns {Stream} A new stream.
 */
Stream.prototype.map = function(f) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      env.subscribe(fn.compose(next, f), done);
    }
  });
};

// Stream.prototype.map = function(f) {
//   return this.flatMap(function(a) {
//     return Stream.of(f(a));
//   });
// };

/**
 * Creates a new stream that filters the values of the stream using the
 * predicate function `p`. The predicate function `p` must return a boolean
 * value.
 *
 * @param {function} p A predicate function.
 * @returns {Stream} A new stream.
 */
Stream.prototype.filter = function(p) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      env.subscribe(function(a) {
        if (p(a)) { next(a); }
      }, done);
    }
  });
};

/**
 * Creates a new stream that reduces the stream with the starting value `a` and
 * binary function `f'. The new stream yields the result of all the applications of `f`.
 *
 * @param {*} a An object to use as the starting value.
 * @param {function} f A binary function.
 * @returns {Stream} A new stream.
 */
Stream.prototype.fold = function(a, f) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      env.subscribe(
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
  });
};

/**
 * Creates a new stream that scans the stream with the starting value `a` and
 * binary function `f`. The new stream yields all the intermediate applications
 * of `f`.
 *
 * @param {*} a An object to use as the starting value.
 * @param {function} f A binary function.
 * @returns {Stream} A new stream.
 */
Stream.prototype.scan = function(a, f) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      next(a);
      env.subscribe(function(b) {
        a = f(a, b);
        return next(a);
      }, done);
    }
  });
};

/**
 * Creates a new stream that merges the stream with one or more streams.
 *
 * @function Stream#merge
 * @param {...Stream} as A list of streams to be merged.
 * @returns {Stream} A new stream.
 */
Stream.prototype.merge = fn.variadic(function(as) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      var count = 0;
      var onDone = function() {
        if (++count > as.length) {
          done();
        }
      };
      env.subscribe(next, onDone);
      as.map(function(a) {
        a.subscribe(next, onDone);
      });
    }
  });
});

/**
 * Creates a new stream that splits the stream into one or more streams.
 *
 * @param {number} n A number of streams to split.
 * @returns {Array} An array of streams.
 */
Stream.prototype.split = function(n) {
  var env = this;
  var bound = false;
  var nexts = [], dones = [];
  var streams = util
    .range(0, n - 1)
    .map(function(_) {
      return obj.copy(env, {
        subscribe: function(next, done) {
          nexts.push(next);
          dones.push(done);
          subscribe();
        }
      });
    });

  function subscribe() {
    if (!bound) {
      env.subscribe(
        function(a) {
          nexts.map(fn.applyRight(a));
        },
        function() {
          dones.map(fn.apply());
        }
      );
    }
    bound = true;
  }

  return streams;
};

module.exports = Stream;

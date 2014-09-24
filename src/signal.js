'use strict';

var build = require('./list/build'),
    fn    = require('./fn'),
    obj   = require('./obj');

/**
 * Creates a new signal with the `subscribe` function.
 *
 * The `subscribe` function is called by an observer who wishes to subscribe
 * to the signal values.
 *
 * @class
 * @summary The Signal Class
 * @param {function} subscribe A subscribe function.
 * @author Josh Bassett
 */
function Signal(subscribe) {
  /**
   * Subscribes to the signal with the callbacks `next` and `end`.
   *
   * @param {function} next A callback function.
   * @param {function} end A callback function.
   * @function Signal#subscribe
   */
  this.subscribe = subscribe;
}

Signal.prototype.constructor = Signal;

/**
 * Creates a new signal from the array `as`.
 *
 * @param {Array} as An array of values.
 * @returns {Signal} A new signal.
 */
Signal.fromArray = function(as) {
  return new Signal(function(next, done) {
    as.map(fn.unary(next));
    done();
  });
};

/**
 * Creates a new signal from the callback function `f`.
 *
 * @param {function} f A callback function.
 * @returns {Signal} A new signal.
 */
Signal.fromCallback = function(f) {
  return new Signal(function(next, done) {
    f(next);
  });
};

/**
 * Creates a new signal by listening for events of `type` on the `target` object.
 *
 * @param {Element} target A DOM element.
 * @param {string} type A string representing the event type to listen for.
 * @returns {Signal} A new signal.
 */
Signal.fromEvent = function(target, type) {
  return new Signal(function(next, done) {
    if (target.on) {
      target.on(type, next);
    } else if (target.addEventListener) {
      target.addEventListener(type, fn.compose(next, obj.get('detail')));
    }
  });
};

/**
 * Creates a new signal from the promise `p`.
 *
 * @param {Promise} p A Promises/A+ conformant promise.
 * @returns {Signal} A new signal.
 */
Signal.fromPromise = function(p) {
  return new Signal(function(next, done) {
    p.then(next);
  });
};

/**
 * Creates a new signal that contains a single value `a`.
 *
 * @param {*} a A value.
 * @returns {Signal} A new signal.
 */
Signal.of = function(a) {
  return new Signal(function(next, done) {
    if (a) { next(a); }
    done();
  });
};

/**
 * Creates a new signal that applies the function `f` to the values in the
 * signal. The unary function `f` must return a {@link Signal}.
 *
 * @param {function} f A unary function.
 * @returns {Signal} A new signal.
 */
Signal.prototype.concatMap = function(f) {
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
 * Creates a new signal that applies the function `f` to the values in the
 * signal. The unary function `f` must return a signal value.
 *
 * @param {function} f A unary function.
 * @returns {Signal} A new signal.
 */
Signal.prototype.map = function(f) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      env.subscribe(fn.compose(next, f), done);
    }
  });
};

/**
 * Creates a new signal that filters the values of the signal using the
 * predicate function `p`. The predicate function `p` must return a boolean
 * value.
 *
 * @param {function} p A predicate function.
 * @returns {Signal} A new signal.
 */
Signal.prototype.filter = function(p) {
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
 * Creates a new signal that reduces the signal with the starting value `a` and
 * binary function `f'. The new signal yields the result of all the applications of `f`.
 *
 * @param {*} a An object to use as the starting value.
 * @param {function} f A binary function.
 * @returns {Signal} A new signal.
 */
Signal.prototype.fold = function(a, f) {
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
 * Creates a new signal that scans the signal with the starting value `a` and
 * binary function `f`. The new signal yields all the intermediate applications
 * of `f`.
 *
 * @param {*} a An object to use as the starting value.
 * @param {function} f A binary function.
 * @returns {Signal} A new signal.
 */
Signal.prototype.scan = function(a, f) {
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
 * Creates a new signal that merges the signal with one or more signals.
 *
 * @function Signal#merge
 * @param {...Signal} ss A list of signals to be merged.
 * @returns {Signal} A new signal.
 */
Signal.prototype.merge = fn.variadic(function(ss) {
  var env = this;
  return obj.copy(this, {
    subscribe: function(next, done) {
      var count = 0;
      var onDone = function() {
        if (++count > ss.length) {
          done();
        }
      };

      [env].concat(ss).map(function(s) {
        s.subscribe(next, onDone);
      });
    }
  });
});

/**
 * Creates a new signal that splits the signal into one or more signals.
 *
 * @param {number} n A number of signals to split.
 * @returns {Array} An array of signals.
 */
Signal.prototype.split = function(n) {
  var env = this,
      isSubscribed = false,
      nexts = [],
      dones = [];

  var signals = build
    .range(0, n)
    .map(function(_) {
      return obj.copy(env, {
        subscribe: function(next, done) {
          nexts.push(next);
          dones.push(done);
          onSubscribe();
        }
      });
    });

  return signals;

  function onSubscribe() {
    if (!isSubscribed) {
      env.subscribe(
        function(a) {
          nexts.map(fn.applyRight(a));
        },
        function() {
          dones.map(fn.applyRight());
        }
      );
    }
    isSubscribed = true;
  }
};

/**
 * Creates a new signal that zips the signal with one or more signals.
 *
 * @function Signal#zip
 * @param {...Signal} ss A list of signals to be zipped.
 * @returns {Signal} A new signal.
 */
Signal.prototype.zip = fn.variadic(function(ss) {
  var env = this;

  return obj.copy(this, {
    subscribe: function(next, done) {
      var isDone = false,
          count = 0,
          nexts = new Array(ss.length);

      var onNext = function(a, index) {
        nexts[index] = a;
        if (++count > ss.length) {
          next(nexts);
          count = 0;
        }
      };

      var onDone = function() {
        if (!isDone) {
          done();
        }
        isDone = true;
      };

      [env].concat(ss).map(function(s, index) {
        s.subscribe(function(a) { onNext(a, index); }, onDone);
      });
    }
  });
});

module.exports = Signal;

'use strict';

var core = require('./core'),
    util = require('./util');

function append(a, b) {
  if (typeof a === 'string') {
    return a + b;
  } else {
    return a.concat(b);
  }
}

function prepend(a, b) {
  if (typeof a === 'string') {
    return b + a;
  } else {
    return [b].concat(a);
  }
}

function pure(as) {
  return (typeof as[0] === 'string') ? '' : [];
}

function concat(as) {
  return fold(append, pure(as), toArray(as));
}

function concatMap(f, as) {
  return concat(toArray(as).map(f));
}

function fold(f, s, as) {
  return toArray(as).reduce(f, s);
}

function foldRight(f, s, as) {
  return toArray(as).reduceRight(core.flip(f), s);
}

function toArray(as) {
  if (typeof as === 'string') {
    return as.split('');
  } else {
    return as;
  }
}

/**
 * This module defines the utility functions which can be easily combined and
 * composed.
 *
 * @module fn
 * @author Josh Bassett
 */
module.exports = {
  /**
   * The addition operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  add: core.curry(function(a, b) { return b + a; }),

  /**
   * The subtraction operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  sub: core.curry(function(a, b) { return b - a; }),

  /**
   * The multiplication operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mul: core.curry(function(a, b) { return b * a; }),

  /**
   * The division operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  div: core.curry(function(a, b) { return b / a; }),

  /**
   * The modulo operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mod: core.curry(function(a, b) { return b % a; }),

  /**
   * Returns the smallest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  min: core.curry(function(a, b) { return Math.min(a, b); }),

  /**
   * Returns the largest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  max: core.curry(function(a, b) { return Math.max(a, b); }),

  /**
   * The logical AND operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  and: core.curry(function(a, b) { return a && b; }),

  /**
   * The logical OR operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  or: core.curry(function(a, b) { return a || b; }),

  /**
   * The logical NOT operator.
   *
   * @param {boolean} a
   * @returns {boolean} The result.
   */
  not: function(a) { return !a; },

  /**
   * The unary negation operator.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  negate: function(a) { return -a; },

  /**
   * The equality operator.
   *
   * @static
   * @curried
   * @function
   * @param {*} a
   * @param {*} b
   * @returns {boolean} The result.
   */
  eql: core.curry(function(a, b) { return a === b; }),

  /**
   * The greater than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gt: core.curry(function(a, b) { return b > a; }),

  /**
   * The greater than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gte: core.curry(function(a, b) { return b >= a; }),

  /**
   * The less than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lt: core.curry(function(a, b) { return b < a; }),

  /**
   * The less than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lte: core.curry(function(a, b) { return b <= a; }),

  /**
   * Increments the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  inc: function(a) { return a + 1; },

  /**
   * Decrements the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  dec: function(a) { return a - 1; },

  /**
   * Creates a new array of numbers from `a` to `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {Array} A new array.
   */
  range: core.curry(function(a, b) {
    var n    = Math.abs(b - a) + 1,
        sign = b > a ? 1 : -1;

    return Array
      .apply(null, Array(n))
      .map(function(_, i) { return a + (i * sign); });
  }),

  /**
   * Maps and concatenates the list of `as` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array|String} as
   * @returns {Array} A new array.
   */
  concatMap: core.curry(concatMap),

  /**
   * Maps the list of `as` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array} as
   * @returns {Array} A new array.
   */
  map: core.curry(function(f, as) {
    if (typeof as === 'string') {
      return concatMap(f, as);
    } else {
      return as.map(f);
    }
  }),

  /**
   * Filters the list of `as` with the predicate function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array} as
   * @returns {Array} A new array.
   */
  filter: core.curry(function(p, as) {
    if (typeof as === 'string') {
      return concatMap(function(a) {
        return p(a) ? a : '';
      }, as);
    } else {
      return as.filter(p);
    }
  }),

  /**
   * Folds the list of `as` with the binary function `f` and starting value
   * `s`, from left to right.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {*} s
   * @param {Array} as
   * @returns {*} The result.
   */
  fold: core.curry(fold),

  /**
   * Folds the list of `as` with the binary function `f` and starting value
   * `s`, from right to left.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {*} s
   * @param {Array} as
   * @returns {*} The result.
   */
  foldRight: core.curry(foldRight),

  /**
   * Scans the list of `as` with the binary function `f` and starting value
   * `s`, from left to right.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {*} s
   * @param {Array} as
   * @returns {*} The result.
   */
  scan: core.curry(function(f, s, as) {
    var r = [s];

    fold(function(b, a) {
      return core.tap(r.push.bind(r), f(b, a));
    }, s, as);

    return r;
  }),

  /**
   * Scans the list of `as` with the binary function `f` and starting value
   * `s`, from right to left.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {*} s
   * @param {Array} as
   * @returns {*} The result.
   */
  scanRight: core.curry(function(f, s, as) {
    var r = [s];

    foldRight(function(a, b) {
      return core.tap(r.unshift.bind(r), f(a, b));
    }, s, as);

    return r;
  }),

  /**
   * Appends `b` to `a`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} a
   * @param {*} b
   * @returns {*} The result.
   */
  append: core.curry(append),

  /**
   * Prepends `a` to `b`.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} a
   * @param {*} b
   * @returns {*} The result.
   */
  prepend: core.curry(prepend),

  /**
   * Concatenates the list of `as`.
   *
   * @static
   * @function
   * @param {...*} as
   * @returns {*} The result.
   */
  concat: core.variadic(concat),

  /**
   * Returns the first element in the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {*} The result.
   */
  head: function(as) {
    return as[0];
  },

  /**
   * Returns the elements after the first element in the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {*} The result.
   */
  tail: function(as) {
    return as.slice(1);
  },

  /**
   * Returns the elements before the last element in the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {*} The result.
   */
  init: function(as) {
    return as.slice(0, as.length - 1);
  },

  /**
   * Returns the last element in the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {*} The result.
   */
  last: function(as) {
    return as[as.length - 1];
  },

  /**
   * Returns the elements of list of `as` in reverse order.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {*} The result.
   */
  reverse: function(as) {
    return fold(prepend, pure(as), toArray(as));
  },

  /**
   * Branches execution based on the predicate function `p`. If `p(a)` is true
   * then `f` is applied to `a`, otherwise `g` is applied to `a`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {function} f
   * @param {function} g
   * @param {*} a
   * @returns {*} The result.
   */
  branch: core.curry(function(p, f, g, a) {
    if (p(a)) {
      return f(a);
    } else {
      return g(a);
    }
  })
};

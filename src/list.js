'use strict';

var core = require('./core'),
    fn   = require('./fn');

function pure(as) {
  return (typeof as[0] === 'string') ? '' : [];
}

function append(a, b) {
  if (typeof b === 'string') {
    return b + a;
  } else {
    return b.concat(a);
  }
}

function prepend(a, b) {
  if (typeof b === 'string') {
    return a + b;
  } else {
    return [a].concat(b);
  }
}

function concat(as) {
  return toArray(as).reduce(core.flip(append), pure(as));
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
 * This module defines operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = {
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
      return concatMap(fn.branch(p, core.id, core.const('')), as);
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
   * Appends `a` to `b`.
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
    return fold(core.flip(prepend), pure(as), toArray(as));
  }
};

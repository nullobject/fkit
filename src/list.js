'use strict';

var core = require('./core'),
    fn   = require('./fn');

function length(as) {
  return as.length;
}

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

function zipWith(f, as, bs) {
  return toArray(as).map(function(a, i) {
    return f(a, bs[i]);
  });
}

function toArray(as) {
  if (typeof as === 'string') {
    return as.split('');
  } else {
    return as;
  }
}

function pair(a, b) {
  return [a, b];
}

/**
 * This module defines operations on lists.
 *
 * @module list
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Returns a pair with the values `a` and `b`.
   *
   * @static
   * @function
   * @param {*} a A value.
   * @param {*} b A value.
   * @returns {Array} A pair.
   */
  pair: core.curry(pair),

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
   * @returns {Array|String} The result.
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
   * @returns {Array|String} The result.
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
   * @param {Array|String} as
   * @returns {Array|String} The result.
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
   * @param {Array|String} as
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
   * @param {Array|String} as
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
   * @param {Array|String} as
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
   * @param {Array|String} as
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
   * @returns {Array|String} The result.
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
   * @returns {Array|String} The result.
   */
  prepend: core.curry(prepend),

  /**
   * Concatenates the list of `as`.
   *
   * @static
   * @function
   * @param {...*} as
   * @returns {Array|String} The result.
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
   * @returns {Array|String} The result.
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
   * @returns {Array|String} The result.
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
   * Returns the length of the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {number} The length.
   */
  length: length,

  /**
   * Test whether the list of `as` is empty.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {boolean} The result.
   */
  empty: core.compose(fn.eql(0), length),

  /**
   * Returns the elements of list of `as` in reverse order.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  reverse: function(as) {
    return fold(core.flip(prepend), pure(as), toArray(as));
  },

  /**
   * Zips the lists of `as` and `bs` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  zipWith: core.curry(zipWith),

  /**
   * Zips the lists of `as` and `bs` into a list of pairs.
   *
   * @static
   * @curried
   * @function
   * @param {Array|String} as
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  zip: core.curry(function(as, bs) {
    return zipWith(pair, as, bs);
  }),

  /**
   * Unzips a list of pairs into a pair of lists of `as` and `bs`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  unzip: function(as) {
    var s = pure(as[0]);
    return foldRight(function(ps, p) {
      var a = ps[0], b = ps[1],
          as = p[0], bs = p[1];
      return [prepend(a, as), prepend(b, bs)];
    }, pair(s, s), as);
  }
};

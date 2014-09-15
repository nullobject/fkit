'use strict';

var core = require('./core'),
    fn   = require('./fn');

// Returns a new array of length `n`.
function array(n) {
  return Array.apply(null, Array(n));
}

function head(as) {
  return as[0];
}

function tail(as) {
  return as.slice(1);
}

function length(as) {
  return as.length;
}

// Returns an empty monoid.
function mempty(as) {
  return (as && typeof as[0] === 'string') ? '' : [];
}

// Returns a value in a pure context.
function pure(x) {
  return (x && typeof x[0] === 'string') ? x : [x];
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
  return toArray(as).reduce(core.flip(append), mempty(as));
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
  var n = Math.min(as.length, bs.length);
  return toArray(as.slice(0, n)).map(function(a, i) {
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
    return array(n).map(function(_, i) { return a + (i * sign); });
  }),

  /**
   * Creates a new list of length `n` with `a` the value of every element.
   *
   * @static
   * @curried
   * @function
   * @param {number} n
   * @param {number} a
   * @returns {Array} A new array.
   */
  replicate: core.curry(function(n, a) {
    return concat(array(n).map(function() { return pure(a); }));
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
  head: head,

  /**
   * Returns the elements after the first element in the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  tail: tail,

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
    return fold(core.flip(prepend), mempty(as), toArray(as));
  },

  /**
   * Intersperses the elements of list of `as` with a separator `s`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @param {*} s A separator.
   * @returns {Array|String} The result.
   */
  intersperse: core.curry(function(s, as) {
    return concat([head(as), prependToAll(tail(as))]);

    function prependToAll(as) {
      if (as.length === 0) {
        return [];
      } else {
        return concat([s, head(as), prependToAll(tail(as))]);
      }
    }
  }),

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
    var s = mempty(as[0]);
    return foldRight(function(ps, p) {
      var a = ps[0], b = ps[1],
          as = p[0], bs = p[1];
      return [prepend(a, as), prepend(b, bs)];
    }, pair(s, s), as);
  }
};

'use strict';

var core = require('../core'),
    list = require('../list');

function concat(as) {
  return list.toArray(as).reduce(core.flip(list.append), list.mempty(as));
}

function fold(f, s, as) {
  return list.toArray(as).reduce(f, s);
}

function foldRight(f, s, as) {
  return list.toArray(as).reduceRight(core.flip(f), s);
}

/**
 * This module defines fold operations on lists.
 *
 * @module list/fold
 * @author Josh Bassett
 */
module.exports = {
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
   * Maps and concatenates the list of `as` with the function `f`.
   *
   * @static
   * @curried
   * @function
   * @param {function} f
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  concatMap: core.curry(function(f, as) {
    return concat(list.toArray(as).map(f));
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
};

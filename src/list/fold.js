'use strict';

var base = require('./base'),
    fn   = require('../fn');

var self;

function concat(as) {
  return base
    .toArray(as)
    .reduce(fn.flip(base.append), base.mempty(as));
}

/**
 * This module defines fold operations on lists.
 *
 * @module
 * @author Josh Bassett
 */
module.exports = self = {
  /**
   * Concatenates the list of `as`.
   *
   * @static
   * @function
   * @param {...*} as
   * @returns {Array|String} The result.
   */
  concat: fn.variadic(concat),

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
  concatMap: fn.curry(function(f, as) {
    return concat(base.toArray(as).map(f));
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
  fold: fn.curry(function(f, s, as) {
    return base
      .toArray(as)
      .reduce(f, s);
  }),

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
  foldRight: fn.curry(function(f, s, as) {
    return base
      .toArray(as)
      .reduceRight(fn.flip(f), s);
  }),

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
  scan: fn.curry(function(f, s, as) {
    var r = [s];
    self.fold(function(b, a) {
      return fn.tap(r.push.bind(r), f(b, a));
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
  scanRight: fn.curry(function(f, s, as) {
    var r = [s];
    self.foldRight(function(a, b) {
      return fn.tap(r.unshift.bind(r), f(a, b));
    }, s, as);
    return r;
  }),
};

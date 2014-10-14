'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold');

var self;

/**
 * This module defines operations for building lists.
 *
 * @private
 * @module fkit/list/build
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns an array of length `n`.
   *
   * @summary Creates a new array.
   *
   * @example
   *   F.array(3); // [undefined, undefined, undefined]
   *
   * @param n A number.
   * @returns A new array.
   */
  array: function(n) { return Array.apply(null, Array(n)); },

  /**
   * Returns an ordered pair with the values `a` and `b`.
   *
   * @summary Creates a new ordered pair.
   *
   * @example
   *   F.pair(1, 2); // [1, 2]
   *   F.pair('a', 'b'); // ['a', 'b']
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A new pair.
   */
  pair: fn.curry(function(a, b) { return [a, b]; }),

  /**
   * Returns an array of numbers of length `n` starting from `a`.
   *
   * @summary Creates a new array of numbers.
   *
   * @example
   *   F.range(1, 3); // [1, 2, 3]
   *
   * @curried
   * @function
   * @param a A number.
   * @param n A number.
   * @returns A new array.
   */
  range: fn.curry(function(a, n) {
    return self.array(n).map(function(_, i) { return a + i; });
  }),

  /**
   * Returns a list of length `n` with `a` the value of every element.
   *
   * @summary Creates a new list of values.
   *
   * @example
   *   F.replicate(1, 3); // [1, 1, 1]
   *   F.replicate('a', 3); // 'aaa'
   *
   * @curried
   * @function
   * @param n A number.
   * @param a A value.
   * @returns A new array.
   */
  replicate: fn.curry(function(n, a) {
    return fold.concatMap(fn.const(base.pure(a)), self.array(n));
  }),
};

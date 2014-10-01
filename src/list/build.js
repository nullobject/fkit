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
   * Creates a new array of length `n`.
   *
   * @example
   *   array(3); // [undefined, undefined, undefined]
   *
   * @function
   * @param n A number.
   * @returns A new array.
   */
  array: function(n) { return Array.apply(null, Array(n)); },

  /**
   * Creates a new pair with the values `a` and `b`.
   *
   * @example
   *   pair(1, 2); // [1, 2]
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A new array.
   */
  pair: fn.curry(function(a, b) { return [a, b]; }),

  /**
   * Creates a new array of numbers from `a` of length `n`.
   *
   * @example
   *   range(1, 3); // [1, 2, 3]
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
   * Creates a new list of length `n` with `a` the value of every element.
   *
   * @example
   *   replicate(1, 3); // [1, 1, 1]
   *   replicate('a', 3); // 'aaa'
   *
   * @curried
   * @function
   * @param n A number.
   * @param a A value.
   * @returns A new array.
   */
  replicate: fn.curry(function(n, a) {
    return fold.concat(self.array(n).map(fn.const(base.pure(a))));
  }),
};

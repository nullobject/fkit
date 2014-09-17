'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold');

var self;

/**
 * This module defines build operations on lists.
 *
 * @module list/build
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns a new array of length `n`.
   *
   * @static
   * @function
   * @param {number} n
   * @returns {Array} A new array.
   */
  array: function(n) { return Array.apply(null, Array(n)); },

  /**
   * Returns a pair with the values `a` and `b`.
   *
   * @static
   * @function
   * @param {*} a A value.
   * @param {*} b A value.
   * @returns {Array} A pair.
   */
  pair: fn.curry(function(a, b) { return [a, b]; }),

  /**
   * Creates a new array of numbers from `a` of length `n`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} n
   * @returns {Array} A new array.
   */
  range: fn.curry(function(a, n) {
    return self.array(n).map(function(_, i) { return a + i; });
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
  replicate: fn.curry(function(n, a) {
    return fold.concat(self.array(n).map(function() { return base.pure(a); }));
  }),
};

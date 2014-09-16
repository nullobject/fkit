'use strict';

var core = require('../core'),
    fold = require('./fold'),
    list = require('../list');

function array(n) {
  return Array.apply(null, Array(n));
}

function pair(a, b) {
  return [a, b];
}

/**
 * This module defines build operations on lists.
 *
 * @module list/build
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Returns a new array of length `n`.
   *
   * @static
   * @function
   * @param {number} n
   * @returns {Array} A new array.
   */
  array: array,

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
   * Creates a new array of numbers from `a` of length `n`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} n
   * @returns {Array} A new array.
   */
  range: core.curry(function(a, n) {
    return array(n).map(function(_, i) { return a + i; });
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
    return fold.concat(array(n).map(function() { return list.pure(a); }));
  }),
};

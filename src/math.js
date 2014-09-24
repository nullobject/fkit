'use strict';

var fn = require('./fn');

/**
 * This module defines math functions.
 *
 * @module fkit/math
 * @summary Yay, Numbers!
 * @author Josh Bassett
 */
module.exports = {
  /**
   * The addition operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The value `b + a`.
   */
  add: fn.curry(function(a, b) { return b + a; }),

  /**
   * The subtraction operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The value `b - a`.
   */
  sub: fn.curry(function(a, b) { return b - a; }),

  /**
   * The multiplication operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The value `b * a`.
   */
  mul: fn.curry(function(a, b) { return b * a; }),

  /**
   * The division operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The value `b / a`.
   */
  div: fn.curry(function(a, b) { return b / a; }),

  /**
   * The modulo operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The value `b % a`.
   */
  mod: fn.curry(function(a, b) { return b % a; }),

  /**
   * Returns the smallest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The minimum value of `a` and `b`.
   */
  min: fn.curry(function(a, b) { return Math.min(b, a); }),

  /**
   * Returns the largest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {number} The maximum value of `a` and `b`.
   */
  max: fn.curry(function(a, b) { return Math.max(b, a); }),

  /**
   * The unary negation operator.
   *
   * @param {number} a A value.
   * @returns {number} The value `-a`.
   */
  negate: function(a) { return -a; },

  /**
   * The equality operator.
   *
   * @static
   * @curried
   * @function
   * @param {*} a A value.
   * @param {*} b A value.
   * @returns {boolean} The result.
   */
  eq: fn.curry(function(a, b) { return b === a; }),

  /**
   * The greater than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {boolean} The result.
   */
  gt: fn.curry(function(a, b) { return b > a; }),

  /**
   * The greater than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {boolean} The result.
   */
  gte: fn.curry(function(a, b) { return b >= a; }),

  /**
   * The less than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {boolean} The result.
   */
  lt: fn.curry(function(a, b) { return b < a; }),

  /**
   * The less than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a A value.
   * @param {number} b A value.
   * @returns {boolean} The result.
   */
  lte: fn.curry(function(a, b) { return b <= a; }),

  /**
   * Increments the number.
   *
   * @param {number} a A value.
   * @returns {number} The result.
   */
  inc: function(a) { return a + 1; },

  /**
   * Decrements the number.
   *
   * @param {number} a A value.
   * @returns {number} The result.
   */
  dec: function(a) { return a - 1; },
};

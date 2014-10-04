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
   * @summary The addition operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  add: fn.curry(function(a, b) { return b + a; }),

  /**
   * @summary The subtraction operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  sub: fn.curry(function(a, b) { return b - a; }),

  /**
   * @summary The multiplication operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  mul: fn.curry(function(a, b) { return b * a; }),

  /**
   * @summary The division operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  div: fn.curry(function(a, b) { return b / a; }),

  /**
   * @summary The modulo operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  mod: fn.curry(function(a, b) { return b % a; }),

  /**
   * Returns the largest of the given values `a` and `b`.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  max: fn.curry(function(a, b) { return b > a ? b : a; }),

  /**
   * Returns the smallest of the given values `a` and `b`.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  min: fn.curry(function(a, b) { return a > b ? b : a; }),

  /**
   * @summary The unary negation operator.
   *
   * @param a A number.
   * @returns A number.
   */
  negate: function(a) { return -a; },

  /**
   * @summary The equality operator.
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A boolean value.
   */
  eq: fn.curry(function(a, b) { return b === a; }),

  /**
   * @summary The greater than operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A boolean value.
   */
  gt: fn.curry(function(a, b) { return b > a; }),

  /**
   * @summary The greater than or equal operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A boolean value.
   */
  gte: fn.curry(function(a, b) { return b >= a; }),

  /**
   * @summary The less than operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A boolean value.
   */
  lt: fn.curry(function(a, b) { return b < a; }),

  /**
   * @summary The less than or equal operator.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A boolean value.
   */
  lte: fn.curry(function(a, b) { return b <= a; }),

  /**
   * @summary Increments a number.
   *
   * @param a A number.
   * @returns A number.
   */
  inc: function(a) { return a + 1; },

  /**
   * @summary Decrements a number.
   *
   * @param a A number.
   * @returns A number.
   */
  dec: function(a) { return a - 1; },
};

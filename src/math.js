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
   * Returns the result of `b + a`.
   *
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
   * Returns the result of `b - a`.
   *
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
   * Returns the result of `b * a`.
   *
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
   * Returns the result of `b / a`.
   *
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
   * Returns the result of `b % a`.
   *
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
   * Returns the largest of the numbers `a` and `b`.
   *
   * @summary Determines the largest of two numbers.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  max: fn.curry(function(a, b) { return b > a ? b : a; }),

  /**
   * Returns the smallest of the numbers `a` and `b`.
   *
   * @summary Determines the smallest of two numbers.
   *
   * @curried
   * @function
   * @param a A number.
   * @param b A number.
   * @returns A number.
   */
  min: fn.curry(function(a, b) { return a > b ? b : a; }),

  /**
   * Returns the negation of the number `a`.
   *
   * @summary The negation operator.
   *
   * @param a A number.
   * @returns A number.
   */
  negate: function(a) { return -a; },

  /**
   * Returns `true` if the value `a` is equal to the value `b`, false
   * otherwise.
   *
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
   * Returns `true` if the value `a` is not equal to the value `b`, false
   * otherwise.
   *
   * @summary The inequality operator.
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @returns A boolean value.
   */
  neq: fn.curry(function(a, b) { return b !== a; }),

  /**
   * Returns `true` if the value `a` is greater than the value `b`, false
   * otherwise.
   *
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
   * Returns `true` if the value `a` is greater than or equal to the value `b`,
   * false otherwise.
   *
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
   * Returns `true` if the value `a` is less than the value `b`, false
   * otherwise.
   *
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
   * Returns `true` if the value `a` is less than or equal to the value `b`,
   * false otherwise.
   *
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
   * Returns the result of `a + 1`.
   *
   * @summary Increments a number.
   *
   * @param a A number.
   * @returns A number.
   */
  inc: function(a) { return a + 1; },

  /**
   * Returns the result of `a - 1`.
   *
   * @summary Decrements a number.
   *
   * @param a A number.
   * @returns A number.
   */
  dec: function(a) { return a - 1; },
};

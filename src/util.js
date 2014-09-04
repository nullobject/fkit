'use strict';

var core = require('./core');

/**
 * @module util
 * @author Josh Bassett
 */
module.exports = {
  /**
   * The addition operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  add: core.curry(function(a, b) { return a + b; }),

  /**
   * The subtraction operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  sub: core.curry(function(a, b) { return a - b; }),

  /**
   * The multiplication operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mul: core.curry(function(a, b) { return a * b; }),

  /**
   * The division operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  div: core.curry(function(a, b) { return a / b; }),

  /**
   * The modulo operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mod: core.curry(function(a, b) { return a % b; }),

  /**
   * Returns the largest of the given values `a` and `b`.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The maximum value.
   */
  max: core.curry(function(a, b) { return Math.max(a,  b); }),

  /**
   * Returns the smallest of the given values `a` and `b`.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The minimum value.
   */
  min: core.curry(function(a, b) { return Math.min(a,  b); }),

  /**
   * The logical AND operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  and: core.curry(function(a, b) { return a && b; }),

  /**
   * The logical OR operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  or: core.curry(function(a, b) { return a || b; }),

  /**
   * The logical NOT operator.
   *
   * @param {boolean} a
   * @returns {boolean} The result.
   */
  not: function(a) { return !a; },

  /**
   * The unary negation operator.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  negate: function(a) { return -a; },

  /**
   * The equality operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {*} a
   * @param {*} b
   * @returns {boolean} The result.
   */
  eql: core.curry(function(a, b) { return a === b; }),

  /**
   * The greater than operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gt: core.curry(function(a, b) { return a > b; }),

  /**
   * The greater than or equal operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gte: core.curry(function(a, b) { return a >= b; }),

  /**
   * The less than operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lt: core.curry(function(a, b) { return a < b; }),

  /**
   * The less than or equal operator.
   *
   * This function is curried by default.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lte: core.curry(function(a, b) { return a <= b; }),

  /**
   * Increments the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  inc: function(a) { return a + 1; },

  /**
   * Decrements the number.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  dec: function(a) { return a - 1; },

  /**
   * Creates a new array of numbers from `a` to `b`.
   *
   * @param {number} a
   * @param {number} b
   * @returns {Array} A new array.
   */
  range: core.curry(function(a, b) {
    var n    = Math.abs(b - a) + 1,
        sign = b > a ? 1 : -1;

    return Array
      .apply(null, Array(n))
      .map(function(_, i) { return a + (i * sign); });
  })
};

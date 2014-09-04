'use strict';

var fn = require('./fn');

/**
 * @module util
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Curried version of `+`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  add: fn.curry(function(a, b) { return a + b; }),

  /**
   * Curried version of `-`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  sub: fn.curry(function(a, b) { return a - b; }),

  /**
   * Curried version of `*`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mul: fn.curry(function(a, b) { return a * b; }),

  /**
   * Curried version of `/`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  div: fn.curry(function(a, b) { return a / b; }),

  /**
   * Curried version of `%`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mod: fn.curry(function(a, b) { return a % b; }),

  /**
   * Curried version of `max`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The maximum value.
   */
  max: fn.curry(function(a, b) { return Math.max(a,  b); }),

  /**
   * Curried version of `min`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The minimum value.
   */
  min: fn.curry(function(a, b) { return Math.min(a,  b); }),

  /**
   * Curried version of `&&`.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  and: fn.curry(function(a, b) { return a && b; }),

  /**
   * Curried version of `||`.
   *
   * @static
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  or: fn.curry(function(a, b) { return a || b; }),

  /**
   * Curried version of `!`.
   *
   * @param {*} a
   * @returns {boolean} The result.
   */
  not: function(a) { return !a; },

  /**
   * Curried version of `===`.
   * The unary negation operator.
   *
   * @param {number} a
   * @returns {number} The result.
   */
  negate: function(a) { return -a; },

   *
   * @static
   * @function
   * @param {*} a
   * @param {*} b
   * @returns {boolean} The result.
   */
  eql: fn.curry(function(a, b) { return a === b; }),

  /**
   * Curried version of `>`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gt: fn.curry(function(a, b) { return a > b; }),

  /**
   * Curried version of `>=`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gte: fn.curry(function(a, b) { return a >= b; }),

  /**
   * Curried version of `<`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lt: fn.curry(function(a, b) { return a < b; }),

  /**
   * Curried version of `<=`.
   *
   * @static
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lte: fn.curry(function(a, b) { return a <= b; }),

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
  range: fn.curry(function(a, b) {
    var n    = Math.abs(b - a) + 1,
        sign = b > a ? 1 : -1;

    return Array
      .apply(null, Array(n))
      .map(function(_, i) { return a + (i * sign); });
  })
};

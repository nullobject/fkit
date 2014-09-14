'use strict';

var core = require('./core');

/**
 * This module defines many utility functions.
 *
 * @module fn
 * @author Josh Bassett
 */
module.exports = {
  /**
   * The addition operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  add: core.curry(function(a, b) { return b + a; }),

  /**
   * The subtraction operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  sub: core.curry(function(a, b) { return b - a; }),

  /**
   * The multiplication operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mul: core.curry(function(a, b) { return b * a; }),

  /**
   * The division operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  div: core.curry(function(a, b) { return b / a; }),

  /**
   * The modulo operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  mod: core.curry(function(a, b) { return b % a; }),

  /**
   * Returns the smallest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  min: core.curry(function(a, b) { return Math.min(b, a); }),

  /**
   * Returns the largest of the given values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {number} The result.
   */
  max: core.curry(function(a, b) { return Math.max(b, a); }),

  /**
   * The logical AND operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  and: core.curry(function(a, b) { return b && a; }),

  /**
   * The logical OR operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a
   * @param {boolean} b
   * @returns {boolean} The result.
   */
  or: core.curry(function(a, b) { return b || a; }),

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
   * @static
   * @curried
   * @function
   * @param {*} a
   * @param {*} b
   * @returns {boolean} The result.
   */
  eql: core.curry(function(a, b) { return b === a; }),

  /**
   * The greater than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gt: core.curry(function(a, b) { return b > a; }),

  /**
   * The greater than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  gte: core.curry(function(a, b) { return b >= a; }),

  /**
   * The less than operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lt: core.curry(function(a, b) { return b < a; }),

  /**
   * The less than or equal operator.
   *
   * @static
   * @curried
   * @function
   * @param {number} a
   * @param {number} b
   * @returns {boolean} The result.
   */
  lte: core.curry(function(a, b) { return b <= a; }),

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
   * Returns the string converted to uppercase.
   *
   * @param {String} a
   * @returns {String} The result.
   */
  toUpper: function(a) { return a.toUpperCase(); },

  /**
   * Returns the string converted to lowercase.
   *
   * @param {String} a
   * @returns {String} The result.
   */
  toLower: function(a) { return a.toLowerCase(); },

  /**
   * Branches execution based on the predicate function `p`. If `p(a)` is true
   * then `f` is applied to `a`, otherwise `g` is applied to `a`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {function} f
   * @param {function} g
   * @param {*} a
   * @returns {*} The result.
   */
  branch: core.curry(function(p, f, g, a) {
    if (p(a)) {
      return f(a);
    } else {
      return g(a);
    }
  })
};

'use strict';

var fn = require('./fn');

/**
 * This module defines logic functions.
 *
 * @module logic
 * @author Josh Bassett
 */
module.exports = {
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
  and: fn.curry(function(a, b) { return b && a; }),

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
  or: fn.curry(function(a, b) { return b || a; }),

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
  branch: fn.curry(function(p, f, g, a) {
    return p(a) ? f(a) : g(a);
  }),
};

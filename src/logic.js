'use strict';

var fn = require('./fn');

/**
 * This module defines logic functions.
 *
 * @module fkit/logic
 * @summary Boolean Functions And Combinators
 * @author Josh Bassett
 */
module.exports = {
  /**
   * The logical AND operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a A value.
   * @param {boolean} b A value.
   * @returns {boolean} The result.
   * @example and(a, b) === a && b
   */
  and: fn.curry(function(a, b) { return b && a; }),

  /**
   * The logical OR operator.
   *
   * @static
   * @curried
   * @function
   * @param {boolean} a A value.
   * @param {boolean} b A value.
   * @returns {boolean} The result.
   */
  or: fn.curry(function(a, b) { return b || a; }),

  /**
   * The logical NOT operator.
   *
   * @param {boolean} a A value.
   * @returns {boolean} The result.
   */
  not: function(a) { return !a; },

  /**
   * Branches execution based on the predicate function `p`. If `p(a)` is true
   * then `f` is applied to `a`, otherwise `g` is applied to `a`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p The predicate function.
   * @param {function} f A function.
   * @param {function} g A function.
   * @param {*} a A value.
   * @returns {*} The result.
   * @example
   *   function big(a) { return a + ' is a big number'; }
   *   function small(a) { return a + ' is a small number'; }
   *   var f = branch(fkit.gt(10), big, small);
   *   f(10); // small number
   *   f(11); // big number
   */
  branch: fn.curry(function(p, f, g, a) {
    return p(a) ? f(a) : g(a);
  }),
};

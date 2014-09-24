'use strict';

var fn  = require('./fn'),
    map = require('./list/map');

var self;

/**
 * This module defines logic functions.
 *
 * @module fkit/logic
 * @summary Logical Functions and Combinators
 * @author Josh Bassett
 */
self = module.exports = {
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

  /**
   * Applies the list of predicate functions `ps` to the value `a` and returns
   * their conjunction.
   *
   * @static
   * @curried
   * @function
   * @param {Array} ps
   * @param {*} a
   * @returns {boolean} The result.
   * @example
   *   p(a) { return a > 1; }
   *   q(a) { return a > 2; }
   *   whereAll([p, q], 1); // false
   *   whereAll([p, q], 2); // false
   *   whereAll([p, q], 3); // true
   */
  whereAll: fn.curry(function(ps, a) {
    return ps.map(fn.applyRight(a)).reduce(self.and, true);
  }),

  /**
   * Applies the list of predicate functions `ps` to the value `a` and returns
   * their disjunction.
   *
   * @static
   * @curried
   * @function
   * @param {Array} ps
   * @param {*} a
   * @returns {boolean} The result.
   * @example
   *   p(a) { return a > 1; }
   *   q(a) { return a > 2; }
   *   whereAny([p, q], 1); // false
   *   whereAny([p, q], 2); // true
   *   whereAny([p, q], 3); // true
   */
  whereAny: fn.curry(function(ps, a) {
    return ps.map(fn.applyRight(a)).reduce(self.or, false);
  }),
};

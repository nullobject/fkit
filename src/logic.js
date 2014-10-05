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
   * @summary The logical AND operator.
   *
   * @example and(a, b) == a && b
   *
   * @curried
   * @function
   * @param a A boolean value.
   * @param b A boolean value.
   * @returns A boolean value.
   */
  and: fn.curry(function(a, b) { return b && a; }),

  /**
   * @summary The logical OR operator.
   *
   * @example or(a, b) == a || b
   *
   * @curried
   * @function
   * @param a A boolean value.
   * @param b A boolean value.
   * @returns A boolean value.
   */
  or: fn.curry(function(a, b) { return b || a; }),

  /**
   * @summary The logical NOT operator.
   *
   * @param a A value.
   * @returns A boolean value.
   */
  not: function(a) { return !a; },

  /**
   * If `p(a)` is true then `f` is applied to `a`, otherwise `g` is applied to
   * `a`.
   *
   * @summary Branches execution based on a predicate function.
   *
   * @example
   *   function big(a) { return a + ' is a big number'; }
   *   function small(a) { return a + ' is a small number'; }
   *   var f = branch(fkit.gt(10), big, small);
   *   f(10); // small number
   *   f(11); // big number
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param f A function.
   * @param g A function.
   * @param a A value.
   * @returns A value.
   */
  branch: fn.curry(function(p, f, g, a) {
    return p(a) ? f(a) : g(a);
  }),

  /**
   * Applies the list of predicate functions `ps` to the value `a` and returns
   * their conjunction.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   function q(a) { return a > 2; }
   *   whereAll([p, q], 1); // false
   *   whereAll([p, q], 2); // false
   *   whereAll([p, q], 3); // true
   *
   * @curried
   * @function
   * @param ps A list of predicate functions.
   * @param a A value.
   * @returns A boolean value.
   */
  whereAll: fn.curry(function(ps, a) {
    return ps.map(fn.applyRight(a)).reduce(self.and, true);
  }),

  /**
   * Applies the list of predicate functions `ps` to the value `a` and returns
   * their disjunction.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   function q(a) { return a > 2; }
   *   whereAny([p, q], 1); // false
   *   whereAny([p, q], 2); // true
   *   whereAny([p, q], 3); // true
   *
   * @curried
   * @function
   * @param ps A list of predicate functions.
   * @param a A value.
   * @returns A boolean value.
   */
  whereAny: fn.curry(function(ps, a) {
    return ps.map(fn.applyRight(a)).reduce(self.or, false);
  }),
};

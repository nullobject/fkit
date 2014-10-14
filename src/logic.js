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
   * Returns the result of `b && a`.
   *
   * @summary The logical AND operator.
   *
   * @curried
   * @function
   * @param a A boolean value.
   * @param b A boolean value.
   * @returns A boolean value.
   */
  and: fn.curry(function(a, b) { return b && a; }),

  /**
   * Returns the result of `b || a`.
   *
   * @summary The logical OR operator.
   *
   * @curried
   * @function
   * @param a A boolean value.
   * @param b A boolean value.
   * @returns A boolean value.
   */
  or: fn.curry(function(a, b) { return b || a; }),

  /**
   * Returns the result of `!a`.
   *
   * @summary The logical NOT operator.
   *
   * @param a A boolean.
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
   *   var f = F.branch(F.gt(10), big, small);
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
   *   var ps = [F.gt(1), F.gt(2)];
   *   F.whereAll(ps, 1); // false
   *   F.whereAll(ps, 2); // false
   *   F.whereAll(ps, 3); // true
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
   *   var ps = [F.gt(1), F.gt(2)];
   *   F.whereAny(ps, 1); // false
   *   F.whereAny(ps, 2); // true
   *   F.whereAny(ps, 3); // true
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

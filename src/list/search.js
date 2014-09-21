'use strict';

var fn    = require('../fn'),
    fold  = require('./fold'),
    logic = require('../logic'),
    map   = require('./map');

var self;

/**
 * This module defines search operations on lists.
 *
 * @private
 * @module fkit/list/search
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Determines if the list of `as` contains the element `a`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a - A value.
   * @param {Array|String} as
   * @returns {boolean} The result.
   * @example
   *   elem(0, [1, 2, 3]); // false
   *   elem(1, [1, 2, 3]); // true
   */
  elem: fn.curry(function (a, as) {
    return as.indexOf(a) >= 0;
  }),

  /**
   * Filters the list of `as` with the predicate function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {Array|String} The result.
   * @example
   *   p(a) { return a > 1; }
   *   filter(p, [1, 2, 3]); // [2, 3]
   */
  filter: fn.curry(function(p, as) {
    if (typeof as === 'string') {
      return fold.concatMap(function(a) {
        return p(a) ? a : '';
      }, as);
    } else {
      return as.filter(p);
    }
  }),

  /**
   * Determines if all elements in the list of `as` satisfy the predicate
   * function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {boolean} The result.
   * @example
   *   p(a) { return a > 1; }
   *   all(p, [1, 2, 3]); // false
   *   all(p, [2, 3, 4]); // true
   */
  all: fn.curry(function(p, as) {
    return self.filter(p, as).length === as.length;
  }),

  /**
   * Determines if any elements in the list of `as` satisfy the predicate
   * function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {boolean} The result.
   * @example
   *   p(a) { return a > 1; }
   *   any(p, [1, 2, 3]); // true
   *   any(p, [2, 3, 4]); // true
   */
  any: fn.curry(function(p, as) {
    return self.filter(p, as).length > 0;
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
    return map.applyAll(ps, a).reduce(logic.and, true);
  }),

  /**
   * Applies the list of predicate functions `ps` to the value `a` and returns
   * their disjunction.
   *
   * @static
   :a
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
    return map.applyAll(ps, a).reduce(logic.or, false);
  }),
};

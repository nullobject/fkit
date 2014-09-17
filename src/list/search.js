'use strict';

var fn    = require('../fn'),
    fold  = require('./fold'),
    logic = require('../logic'),
    map   = require('./map');

var self;

/**
 * This module defines search operations on lists.
 *
 * @module list/search
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Filters the list of `as` with the predicate function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {Array|String} The result.
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
   * Determines if all elements of the list of `as` satisfy the predicate
   * function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {boolean} The result.
   */
  all: fn.curry(function(p, as) {
    return self.filter(p, as).length === as.length;
  }),

  /**
   * Determines if any elements of the list of `as` satisfy the predicate
   * function `p`.
   *
   * @static
   * @curried
   * @function
   * @param {function} p
   * @param {Array|String} as
   * @returns {boolean} The result.
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
   */
  whereAll: fn.curry(function(ps, a) {
    return map.applyAll(ps, a).reduce(logic.and, true);
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
   */
  whereAny: fn.curry(function(ps, a) {
    return map.applyAll(ps, a).reduce(logic.or, false);
  }),
};

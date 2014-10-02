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
   * @example
   *   elem(0, [1, 2, 3]); // false
   *   elem(1, [1, 2, 3]); // true
   *   elem('a', 'foo'); // false
   *   elem('f', 'foo'); // true
   *
   * @curried
   * @function
   * @param a A value.
   * @param as A list.
   * @returns A value.
   */
  elem: fn.curry(function(a, as) {
    return as.indexOf(a) >= 0;
  }),

  /**
   * Filters the list of `as` with the predicate function `p`.
   *
   * @example
   *   p(a) { return a > 1; }
   *   filter(p, [1, 2, 3]); // [2, 3]
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
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
   * Finds the first element in the list of `as` that satisfies the predicate
   * function `p`.
   *
   * @summary Finds an element in a list.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   find(p, [1, 2, 3]); // 2
   *   function q(a) { return a > 'a'; }
   *   find(q, 'abc'); // 'b'
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A value or `undefined` if no value was found.
   */
  find: fn.curry(function(p, as) {
    return base.head(self.filter(p, as));
  }),

  /**
   * Determines if all elements in the list of `as` satisfy the predicate
   * function `p`.
   *
   * @example
   *   p(a) { return a > 1; }
   *   all(p, [1, 2, 3]); // false
   *   all(p, [2, 3, 4]); // true
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A boolean value.
   */
  all: fn.curry(function(p, as) {
    return self.filter(p, as).length === as.length;
  }),

  /**
   * Determines if any elements in the list of `as` satisfy the predicate
   * function `p`.
   *
   * @example
   *   p(a) { return a > 1; }
   *   any(p, [1, 2, 3]); // true
   *   any(p, [2, 3, 4]); // true
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A boolean value.
   */
  any: fn.curry(function(p, as) {
    return self.filter(p, as).length > 0;
  }),
};

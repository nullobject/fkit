'use strict';

var base  = require('./base'),
    fn    = require('../fn'),
    fold  = require('./fold'),
    logic = require('../logic'),
    math  = require('../math');

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
   * Returns `true` if the list of `as` contains the element `a`, `false`
   * otherwise.
   *
   * @summary Gets an element from a list.
   *
   * @example
   *   elem(0, [1, 2, 3]); // false
   *   elem(1, [1, 2, 3]); // true
   *   elem('a', 'foo'); // false
   *   elem('o', 'foo'); // true
   *
   * @curried
   * @function
   * @param a A value.
   * @param as A list.
   * @returns A boolean value.
   */
  elem: fn.curry(function(a, as) {
    return as.indexOf(a) >= 0;
  }),

  /**
   * Returns the index of the first occurance of the element `a` in the list of
   * `as`.
   *
   * @summary Gets the index of the first occurance of an element in a list.
   *
   * @example
   *   elemIndex(0, [1, 2, 3]); // undefined
   *   elemIndex(1, [1, 2, 3]); // 0
   *   elemIndex('a', 'foo'); // undefined
   *   elemIndex('o', 'foo'); // 1
   *
   * @curried
   * @function
   * @param a A value.
   * @param as A list.
   * @returns A number or `undefined` if no value was found.
   */
  elemIndex: fn.curry(function(a, as) {
    var i = as.indexOf(a);
    return (i >= 0) ? i : undefined;
  }),

  /**
   * Returns the indices of all occurances of the element `a` in the list of
   * `as`.
   *
   * @summary Gets the indices of all occurances of an element in a list.
   *
   * @example
   *   elemIndices(0, [1, 2, 3]); // []
   *   elemIndices(1, [1, 2, 3]); // [0]
   *   elemIndices('a', 'foo'); // []
   *   elemIndices('o', 'foo'); // [1, 2]
   *
   * @curried
   * @function
   * @param a A value.
   * @param as A list.
   * @returns A number or `undefined` if no value was found.
   */
  elemIndices: fn.curry(function(a, as) {
    return self.findIndices(math.eq(a), as);
  }),

  /**
   * Returns an element in the list of `as` that satisfies the predicate function
   * `p`.
   *
   * @summary Finds an element in a list that satisfies a predicate function.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   find(p, []); // undefined
   *   find(p, [1, 2, 3]); // 2
   *   function q(a) { return a === 'o'; }
   *   find(q, ''); // undefined
   *   find(q, 'foo'); // 'o'
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
   * Returns the index of the first occurance of an element in the list of `as`
   * that satisfies the predicate function `p`.
   *
   * @summary Finds the index of the first occurance of an element in a list
   * that satisfies a predicate function.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   findIndex(p, []); // undefined
   *   findIndex(p, [1, 2, 3]); // 1
   *   function q(a) { return a === 'o'; }
   *   findIndex(q, ''); // undefined
   *   findIndex(q, 'foo'); // 1
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A number or `undefined` if no value was found.
   */
  findIndex: fn.curry(function(p, as) {
    var n = as.length;
    for (var i = 0; i < n; i++) {
      if (p(as[i])) { return i; }
    }
    return undefined;
  }),

  /**
   * Returns the indices of the elements in the list of `as` that satisfy the
   * predicate function `p`.
   *
   * @summary Finds the indices of all occurances of the elements in a list
   * that satisfy a predicate function.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   findIndices(p, []); // []
   *   findIndices(p, [1, 2, 3]); // [1, 2]
   *   function q(a) { return a === 'o'; }
   *   findIndices(q, ''); // []
   *   findIndices(q, 'foo'); // [1, 2]
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A number or `undefined` if no value was found.
   */
  findIndices: fn.curry(function(p, as) {
    var s = [],
        n = as.length;
    for (var i = 0; i < n; i++) {
      if (p(as[i])) { s.push(i); }
    }
    return s;
  }),

  /**
   * Filters all elements in the list of `as` that satisfy the predicate
   * function `p`.
   *
   * @summary Filters a list using a predicate function.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   filter(p, [1, 2, 3]); // [2, 3]
   *   function q(a) { return a === 'o'; }
   *   filter(q, 'foo'); // 'oo'
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A new list.
   */
  filter: fn.curry(function(p, as) {
    var f = logic.branch(p, fn.id, fn.const(''));
    return (typeof as === 'string') ?
      fold.concatMap(f, as) :
      as.filter(p);
  }),

  /**
   * Partitions the list of `as` into two lists: elements that do and do not
   * satisfy the predicate function `p`.
   *
   * @summary Partitions a list using a predicate function.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   partition(p, [1, 2, 3]); // [[2, 3], [1]]
   *   function q(a) { return a === 'o'; }
   *   partition(q, 'foo'); // ['oo', 'f']
   *
   * @curried
   * @function
   * @param p A predicate function.
   * @param as A list.
   * @returns A pair of lists.
   */
  partition: fn.curry(function(p, as) {
    return [
      self.filter(p, as),
      self.filter(fn.compose(logic.not, p), as)
    ];
  }),

  /**
   * Determines if all elements in the list of `as` satisfy the predicate
   * function `p`.
   *
   * @example
   *   function p(a) { return a > 1; }
   *   all(p, [1, 2, 3]); // false
   *   all(p, [2, 3]); // true
   *   all(p, [3]); // true
   *   function q(a) { return a === 'o'; }
   *   all(q, 'foo'); // false
   *   all(q, 'oo'); // true
   *   all(q, 'o'); // true
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
   *   function p(a) { return a > 1; }
   *   any(p, [1, 2, 3]); // true
   *   any(p, [1, 2]); // true
   *   any(p, [1]); // false
   *   function q(a) { return a === 'o'; }
   *   any(q, 'foo'); // true
   *   any(q, 'fo'); // true
   *   any(q, 'f'); // false
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

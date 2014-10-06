'use strict';

var base   = require('./base'),
    build  = require('./build'),
    fn     = require('../fn'),
    fold   = require('./fold'),
    map    = require('./map'),
    math   = require('../math'),
    search = require('./search');

var self;

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns a list with all duplicate elements removed from the list of `as`.
   *
   * @summary Removes duplicate elements from a list.
   *
   * @example
   *   nub([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
   *   nub('abbccc'); // 'abc'
   *
   * @param as A list.
   * @returns A new list.
   */
  nub: function(as) {
    return self.nubBy(math.eq, as);
  },

  /**
   * Returns a list with all duplicate elements that satisfy the comparator
   * function `f` removed from the list of `bs`.
   *
   * @summary Removes duplicate elements from a list using a comparator
   * function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param as A list.
   * @returns A new list.
   */
  nubBy: fn.curry(function nubBy(f, as) {
    var b   = base.head(as),
        bss = base.tail(as);
    return base.empty(as) ?
      base.mempty(as) :
      base.prepend(b, nubBy(f, search.filter(function(a) { return !f(a, b); }, bss)));
  }),

  /**
   * Returns a list that contains the union of elements in the lists of `as`
   * and `bs`.
   *
   * Duplicates are removed from `bs`, but if `as` contains duplicates then so
   * will the result.
   *
   * @summary Calculates the union of two lists.
   *
   * @example
   *   union([1, 2, 3], [2, 3, 4]); // [1, 2, 3, 4]
   *   union('hello', 'world'); // 'hellowrd'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  union: fn.curry(function(as, bs) {
    return fold.fold(function(cs, b) {
      return (search.elem(b, cs)) ? cs : base.append(b, cs);
    }, as, bs);
  }),

  /**
   * Returns a list that contains the intersection of the elments in the lists
   * of `as` and `bs`.
   *
   * Duplicates are removed from `bs`, but if `as` contains duplicates then so
   * will the result.
   *
   * @summary Calculates the intersection of two lists.
   *
   * @example
   *   intersect([1, 2, 3], [2, 3, 4]); // [2, 3]
   *   intersect('hello', 'world'); // 'ol'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  intersect: fn.curry(function(as, bs) {
    return fold.fold(function(cs, a) {
      return (search.elem(a, bs)) ? base.append(a, cs) : cs;
    }, base.mempty(as), as);
  }),

  /**
   * Returns a list that contains the difference of the elements in the lists
   * of `as` and `bs`.
   *
   * @summary Calculates the difference of two lists.
   *
   * @example
   *   difference([1, 2, 3], [2, 3, 4]); // [1]
   *   difference('hello', 'world'); // 'wrd'
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  difference: fn.curry(function(as, bs) {
    return fold.fold(fn.flip(self.remove), as, bs);
  }),

  /**
   * Returns a list with the first occurance of the element `a` removed from
   * the list of `bs`.
   *
   * @summary Removes the first occurance of an element from a list.
   *
   * @example
   *   remove(2, [1, 2, 3]); // [1, 3]
   *   remove('f', 'foo'); // 'oo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  remove: fn.curry(function(a, bs) {
    return self.removeBy(math.eq, a, bs);
  }),

  /**
   * Returns a list with the first occurance of the element `a` that satisfies
   * the comparator function `f` removed from the list of `bs`.
   *
   * @summary Removes the first occurance of an element from a list using a
   * comparator function.
   *
   * @curried
   * @function
   * @param f A comparator function.
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  removeBy: fn.curry(function removeBy(f, a, bs) {
    var b   = base.head(bs),
        bss = base.tail(bs);
    return base.empty(bs) ?
      base.mempty(bs) :
      f(a, b) ? bss : base.prepend(b, removeBy(f, a, bss));
  }),

  /**
   * Returns a list that contains all the ordered pairs `[a, b]` in the lists
   * of `as` and `bs`.
   *
   * @summary Calculates the cartesian product of two lists.
   *
   * @example
   *   cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
   *   cartesian('ab', 'cd'); // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
   *
   * @curried
   * @function
   * @param as A list.
   * @param bs A list.
   * @returns A new list.
   */
  cartesian: fn.curry(function cartesian(as, bs) {
    return base.empty(as) ?
      [] :
      fold.concat(
        map.map(build.pair(base.head(as)), bs),
        cartesian(base.tail(as), bs)
      );
  }),
};

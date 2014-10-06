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
   * Creates a new list from the union of the lists of `as` and `bs`.
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
   * Creates a new list from the intersection of the lists of `as` and
   * `bs`.
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
   * Creates a new list from the difference of the lists of `as` and `bs`.
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
   * Removes the first occurance of the element `a` from the list of `bs`.
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
   * Removes the first occurance of the element `a` from the list of `bs` that
   * satisfies the comparator function `f`.
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
   * @summary Calculates the cartesian product of two lists.
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

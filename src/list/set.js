'use strict';

var base   = require('./base'),
    build  = require('./build'),
    fn     = require('../fn'),
    fold   = require('./fold'),
    map    = require('./map'),
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
   * Creates a new list which is the union of the lists of `as` and `bs`.
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
   * Creates a new list which is the intersection of the lists of `as` and
   * `bs`.
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
    return fold.fold(function(cs, b) {
      return (search.elem(b, as)) ? base.append(b, cs) : cs;
    }, base.mempty(as), bs);
  }),

  /**
   * Creates a new list which is the difference of the lists of `as` and `bs`.
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
    return fold.fold(fn.flip(self.without), bs, as);
  }),

  /**
   * Removes the element `a` from the list of `bs`.
   *
   * @example
   *   without(2, [1, 2, 3]); // [1, 3]
   *   without('f', 'foo'); // 'oo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  without: fn.curry(function(a, bs) {
    return fold.fold(function(cs, b) {
      return (b === a) ? cs : base.append(b, cs);
    }, base.mempty(bs), bs);
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

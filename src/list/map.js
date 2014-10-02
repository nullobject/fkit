'use strict';

var base = require('./base'),
    fn   = require('../fn'),
    fold = require('./fold');

/**
 * This module defines map operations on lists.
 *
 * @private
 * @module fkit/list/map
 * @author Josh Bassett
 */
module.exports = {
  /**
   * Maps the list of `as` with the function `f`.
   *
   * @curried
   * @function
   * @param f A function.
   * @param as A list.
   * @returns A new list.
   */
  map: fn.curry(function(f, as) {
    return (typeof as === 'string') ?
      fold.concatMap(f, as) :
      as.map(f);
  }),

  /**
   * Returns the elements of the list of `as` in reverse order.
   *
   * @summary Reverse the elements in a list.
   *
   * @example
   *   reverse([1, 2, 3]); // [3, 2, 1]
   *   reverse('foo'); // 'oof'
   *
   * @function
   * @param as A list.
   * @returns A new list.
   */
  reverse: function(as) {
    return base
      .toArray(as)
      .reduce(fn.flip(base.prepend), base.mempty(as));
  },

  /**
   * Returns the elements of the list of `as` interspersed with the separator
   * `s`.
   *
   * @summary Intersperses the elements of a list with separator.
   *
   * @example
   *   intersperse(4, [1, 2, 3]); // [1, 4, 2, 4, 3]
   *   intersperse('-', 'foo'); // 'f-o-o'
   *
   * @curried
   * @function
   * @param s A separator.
   * @param as A list.
   * @returns A new list.
   */
  intersperse: fn.curry(function(s, as) {
    return base.empty(as) ?
      base.mempty(as) :
      fold.concat(base.head(as), prependToAll(base.tail(as)));

    function prependToAll(bs) {
      return base.empty(bs) ?
        base.mempty(bs) :
        fold.concat(s, base.head(bs), prependToAll(base.tail(bs)));
    }
  }),

  /**
   * Applies the list of functions `fs` to the value `a`.
   *
   * @deprecated
   * @curried
   * @function
   * @param fs A list of functions.
   * @param a A value.
   * @returns A new list.
   */
  applyAll: fn.curry(function(fs, a) {
    return fs.map(fn.applyRight(a));
  }),
};

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
   * Returns a list that contains the elements in the list of `as` mapped with
   * the function `f`.
   *
   * @summary Maps a function over a list.
   *
   * @example
   *   F.map(F.inc, [1, 2, 3]); // [2, 3, 4]
   *   F.map(F.toUpper, 'foo'); // ['F', 'O', 'O']
   *
   * @curried
   * @function
   * @param f A function.
   * @param as A list.
   * @returns A new list.
   */
  map: fn.curry(function(f, as) {
    return base
      .toArray(as)
      .map(f);
  }),

  /**
   * Returns a list that contains the elements in the list of `as` in reverse
   * order.
   *
   * @summary Reverses the elements in a list.
   *
   * @example
   *   F.reverse([1, 2, 3]); // [3, 2, 1]
   *   F.reverse('foo'); // 'oof'
   *
   * @param as A list.
   * @returns A new list.
   */
  reverse: function(as) {
    return base
      .toArray(as)
      .reduce(fn.flip(base.prepend), base.mempty(as));
  },

  /**
   * Returns a list that contains the elements in the list of `as` interspersed
   * with the separator `s`.
   *
   * @summary Intersperses the elements of a list with separator.
   *
   * @example
   *   F.intersperse(4, [1, 2, 3]); // [1, 4, 2, 4, 3]
   *   F.intersperse('-', 'foo'); // 'f-o-o'
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
};

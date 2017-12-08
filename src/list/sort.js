const base = require('./base')
const fn = require('../fn')
let self

/**
 * This module defines operations for sorting lists.
 *
 * @private
 * @module fkit/list/sort
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns a list that contains the elements in the list of `as` sorted.
   *
   * @summary Sorts a list using natural ordering.
   *
   * @example
   *   F.sort([2, 3, 1]); // [1, 2, 3]
   *   F.sort('bca'); // 'abc'
   *
   * @curried
   * @function
   * @param a A list.
   * @returns A new list.
   */
  sort: function (as) {
    return self.sortBy(fn.compare, as)
  },

  /**
   * Returns a list that contains the elements in the list of `as` sorted
   * using the comparator function `c`.
   *
   * @summary Sorts a list using a comparator function.
   *
   * @curried
   * @function
   * @param c A comparator function.
   * @param as A list.
   * @returns A new list.
   */
  sortBy: fn.curry(function (c, as) {
    const bs = base.toArray(as.slice(0))
    return base.toList(bs.sort(c), typeof as)
  })
}

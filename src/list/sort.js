import {toArray, toList} from './base'
import {compare, curry} from '../fn'

/**
 * This module defines operations for sorting lists.
 *
 * @private
 * @module fkit/list/sort
 * @author Josh Bassett
 */

/**
 * Returns a list that contains the elements in the list of `as` sorted.
 *
 * @summary Sorts a list using natural ordering.
 *
 * @example
 *   F.sort([2, 3, 1]) // [1, 2, 3]
 *   F.sort('bca') // 'abc'
 *
 * @param a A list.
 * @returns A new list.
 */
export function sort (as) { return sortBy(compare, as) }

/**
 * Returns a list that contains the elements in the list of `as` sorted using
 * the comparator function `c`.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @summary Sorts a list using a comparator function.
 *
 * @example
 *   F.sortBy((a, b) =>
 *     a > b ? 1 : (a < b ? -1 : 0)
 *   , [2, 3, 1]) // [1, 2, 3]
 *
 * @curried
 * @function
 * @param c A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export const sortBy = curry((c, as) => {
  const bs = toArray(as.slice(0))
  return toList(bs.sort(c), typeof as)
})

import compare from '../compare'
import sortBy from '../sortBy'

/**
 * This module defines operations for sorting lists.
 *
 * @private
 * @module fkit/list/sort
 */

/**
 * Returns a list that contains the elements in the list of `as` sorted.
 *
 * @summary Sorts a list using natural ordering.
 *
 * @example
 *
 * F.sort([2, 3, 1]) // [1, 2, 3]
 * F.sort('bca') // 'abc'
 *
 * @param a A list.
 * @returns A new list.
 */
export function sort (as) { return sortBy(compare, as) }

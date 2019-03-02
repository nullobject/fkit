import curry from './curry'
import sortBy from './uncurried/sortBy'

/**
 * Sorts a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @function
 * @param {Function} c The comparator function.
 * @param {Array|String} as The list to sort.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` sorted using the comparator function `c`.
 * @example
 *
 * import { compare, sortBy } from 'fkit'
 * sortBy(compare, [2, 3, 1]) // [1, 2, 3]
 * sortBy(compare, 'bca') // 'abc'
 */
export default curry(sortBy)

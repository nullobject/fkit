import curry from './curry'
import minimumBy from './uncurried/minimumBy'

/**
 * Calculates the minimum value of a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal, then the comparator function should return `0`.
 *
 * @function
 * @param {Function} f The comparator function.
 * @param {Array|String} as The list.
 * @returns The minimum value in the list of `as` using the comparator function
 * `f`.
 * @example
 *
 * import { compare, minimumBy } from 'fkit'
 * minimumBy(compare, [1, 2, 3]) // 1
 * minimumBy(compare, 'abc') // 'a'
 */
export default curry(minimumBy)

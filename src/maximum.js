import compare from './compare'
import maximumBy from './maximumBy'

/**
 * Calculates the maximum value of a list.
 *
 * This a special case of the `maximumBy` function where the values are
 * compared using natural ordering.
 *
 * @function
 * @param {Array|String} as A list.
 * @returns Returns the maximum value in the list of `as`.
 * @example
 *
 * import { maximum } from 'fkit'
 * maximum([1, 2, 3]) // 3
 * maximum('abc') // 'c'
 */
export default maximumBy(compare)

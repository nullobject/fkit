import curry from './curry'
import drop from './uncurried/drop'

/**
 * Drops a number of elements from the start of a list.
 *
 * @function
 * @param {Number} n The number of elements to drop.
 * @param {Array|String} as The list.
 * @returns {Array|String} The result after dropping `n` elements from the list
 * of `as`.
 * @example
 *
 * import { drop } from 'fkit'
 * drop(2, [1, 2, 3]) // [3]
 * drop(2, 'foo') // 'o'
 */
export default curry(drop)

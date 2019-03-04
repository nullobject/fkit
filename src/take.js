import curry from './curry'
import take from './uncurried/take'

/**
 * Takes a number of elements from the start of a list.
 *
 * @function
 * @param {Number} n The number of elements to take.
 * @param {Array|String} as The list.
 * @returns {Array|String} The result after taking `n` elements from the list
 * of `as`.
 * @example
 *
 * import { take } from 'fkit'
 * take(2, [1, 2, 3]) // [1, 2]
 * take(2, 'foo') // 'fo'
 */
export default curry(take)

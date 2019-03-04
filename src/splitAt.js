import curry from './curry'
import splitAt from './uncurried/splitAt'

/**
 * Splits a list.
 *
 * @function
 * @param {Number} n The length of the prefix.
 * @param {Array|String} as The list.
 * @returns {Array} A list that contains the elements in the list of `as` split
 * into a pair of lists: a prefix of length `n` and the remainder of the list.
 * @example
 *
 * import { splitAt } from 'fkit'
 * splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
 * splitAt(1, 'foo') // ['f', 'oo']
 */
export default curry(splitAt)

import curry from './curry'
import replicate from './uncurried/replicate'

/**
 * Replicates a value.
 *
 * @function
 * @param {Number} n The number of copies.
 * @param a The value to replicate.
 * @returns {Array|String} A list of length `n` with `a` the value of every
 * element.
 * @example
 *
 * import { replicate } from 'fkit'
 * replicate(3, 1) // [1, 1, 1]
 * replicate(3, 'a') // 'aaa'
 */
export default curry(replicate)

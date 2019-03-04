import curry from './curry'
import range from './uncurried/range'

/**
 * Creates a new array of numbers.
 *
 * @function
 * @param {Number} a The starting number.
 * @param {Number} n The number of numbers to create.
 * @returns {Array} An array of numbers of length `n` starting from `a`.
 * @example
 *
 * import { range } from 'fkit'
 * range(1, 3) // [1, 2, 3]
 */
export default curry(range)

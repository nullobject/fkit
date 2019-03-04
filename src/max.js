import curry from './curry'
import max from './uncurried/max'

/**
 * Determines the largest of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The largest of the numbers `a` and `b`.
 * @example
 *
 * import { max } from 'fkit'
 * max(1, 2) // 2
 */
export default curry(max)

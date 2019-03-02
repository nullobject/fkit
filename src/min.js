import curry from './curry'
import min from './uncurried/min'

/**
 * Determines the smallest of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The smallest of the numbers `a` and `b`.
 * @example
 *
 * import { min } from 'fkit'
 * min(1, 2) // 1
 */
export default curry(min)

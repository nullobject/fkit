import curry from './curry'
import sub from './uncurried/sub'

/**
 * Returns the difference of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b - a`.
 * @example
 *
 * import { sub } from 'fkit'
 * sub(1, 2) // 1
 */
export default curry(sub)

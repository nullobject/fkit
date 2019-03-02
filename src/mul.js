import curry from './curry'
import mul from './uncurried/mul'

/**
 * Returns the product of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b * a`.
 * @example
 *
 * import { mul } from 'fkit'
 * mul(2, 3) // 6
 */
export default curry(mul)

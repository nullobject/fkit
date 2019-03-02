import curry from './curry'
import div from './uncurried/div'

/**
 * Returns the division of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b / a`.
 * @example
 *
 * import { div } from 'fkit'
 * div(2, 10) // 5
 */
export default curry(div)

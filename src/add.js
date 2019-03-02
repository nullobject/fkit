import add from './uncurried/add'
import curry from './curry'

/**
 * Returns the sum of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b + a`.
 * @example
 *
 * import { add } from 'fkit'
 * add(1, 2) // 3
 */
export default curry(add)

import curry from './curry'
import mod from './uncurried/mod'

/**
 * Returns the modulo of two numbers.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b % a`.
 * @example
 *
 * import { mod } from 'fkit'
 * mod(3, 2) // 1
 */
export default curry(mod)

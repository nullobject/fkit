import curry from './curry'
import randomInt from './uncurried/randomInt'

/**
 * Generates a random integer.
 *
 * @function
 * @param {Number} a The minimum number.
 * @param {Number} b The maximum number.
 * @returns {Number} A random integer between `a` and `b`.
 * @example
 *
 * import { randomInt } from 'fkit'
 * randomInt(1, 3) // 2
 */
export default curry(randomInt)

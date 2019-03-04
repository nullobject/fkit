import curry from './curry'
import randomFloat from './uncurried/randomFloat'

/**
 * Generates a random float.
 *
 * @function
 * @param {Number} a The minimum number.
 * @param {Number} b The maximum number.
 * @returns {Number} A random float between `a` and `b`.
 * @example
 *
 * import { randomFloat } from 'fkit'
 * randomFloat(1, 3) // 2.3
 */
export default curry(randomFloat)

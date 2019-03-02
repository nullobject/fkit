import curry from './curry'
import gte from './uncurried/gte'

/**
 * Determines whether one number is greater than or equal to another.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is greater than or euqal to the
 * number `a`, false otherwise.
 * @example
 *
 * import { gte } from 'fkit'
 * gte(1, 2) // true
 * gte(2, 1) // false
 * gte(2, 2) // true
 */
export default curry(gte)

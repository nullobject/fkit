import curry from './curry'
import gt from './uncurried/gt'

/**
 * Determines whether one number is greater than another.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is greater than the number `a`,
 * false otherwise.
 * @example
 *
 * import { gt } from 'fkit'
 * gt(1, 2) // true
 * gt(2, 1) // false
 */
export default curry(gt)

import curry from './curry'
import lt from './uncurried/lt'

/**
 * Determines whether one number is less than another.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is less than the number `a`,
 * false otherwise.
 * @example
 *
 * import { lt } from 'fkit'
 * lt(1, 2) // false
 * lt(2, 1) // true
 */
export default curry(lt)

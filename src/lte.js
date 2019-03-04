import curry from './curry'
import lte from './uncurried/lte'

/**
 * Determines whether one number is less than or equal to another.
 *
 * @function
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is less than or equal to the
 * number `a`, false otherwise.
 * @example
 *
 * import { lte } from 'fkit'
 * lte(1, 2) // false
 * lte(2, 1) // true
 * lte(2, 2) // true
 */
export default curry(lte)

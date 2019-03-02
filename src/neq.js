import curry from './curry'
import neq from './uncurried/neq'

/**
 * Determines whether two values are not equal.
 *
 * @function
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} `true` if the value `a` is strictly not equal (`!==`) to
 * the value `b`, false otherwise.
 * @example
 *
 * import { neq } from 'fkit'
 * neq(1, 1) // false
 * neq(1, 2) // true
 */
export default curry(neq)

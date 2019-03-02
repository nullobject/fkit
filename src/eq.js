import curry from './curry'
import eq from './uncurried/eq'

/**
 * Determines whether two values are equal.
 *
 * @function
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} `true` if the value `a` is strictly not equal (`===`) to
 * the value `b`, false otherwise.
 * @example
 *
 * import { eq } from 'fkit'
 * eq(1, 1) // true
 * eq(1, 2) // false
 */
export default curry(eq)

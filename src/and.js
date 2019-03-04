import and from './uncurried/and'
import curry from './curry'

/**
 * Returns the logical AND of two values.
 *
 * @function
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} The result of `b && a`.
 * @example
 *
 * import { and } from 'fkit'
 * and(true, true) // true
 * and(0, 1) // false
 * and('', 'foo') // false
 */
export default curry(and)

import curry from './curry'
import or from './uncurried/or'

/**
 * Returns the logical OR of two values.
 *
 * @function
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} The result of `b || a`.
 * @example
 *
 * import { or } from 'fkit'
 * or(false, true) // true
 * or(0, 1) // true
 * or('', 'foo') // true
 */
export default curry(or)

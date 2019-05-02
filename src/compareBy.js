import curry from './curry'
import compareBy from './uncurried/compareBy'

/**
 * Compares two values using natural ordering. The function `f` is applied to *
 * the values _before_ they are compared.
 *
 * This function compares two values, `f(a)` and `f(b)`. If `f(a)` is greater
 * than `f(b)`, then it returns `1`. If `f(a)` is less than `f(b)`, then it
 * returns `-1`. If both values are equal, then it returns `0`.
 *
 * @function
 * @param {Function} f The function to apply to the values before comparing
 * them.
 * @param a The first value.
 * @param b The second value.
 * @returns {Number} The result.
 * @example
 *
 * import { compare } from 'fkit'
 * compare(2, 1) // 1
 * compare(1, 2) // -1
 * compare(2, 2) // 0
 */
export default curry(compareBy)

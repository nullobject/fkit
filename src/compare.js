import compare from './uncurried/compare'
import curry from './curry'

/**
 * Compares two values using natural ordering.
 *
 * This function compares two elements, `a` and `b`. If `a` is greater than
 * `b`, then it returns `1`. If `a` is less than `b`, then it returns `-1`. If
 * both elements are equal, then it returns `0`.
 *
 * @function
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
export default curry(compare)

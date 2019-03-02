import curry from './curry'
import surround from './uncurried/surround'

/**
 * Surrounds the list of `cs` with the values `a` and `b`.
 *
 * @function
 * @param a The left value.
 * @param b The right value.
 * @param {Array|String} cs The list to surround.
 * @returns {Array|String} A new list.
 * @example
 *
 * import { surround } from 'fkit'
 * surround(0, 4, [1, 2, 3]) // [0, 1, 2, 3, 4]
 * surround('(', ')', 'foo') // '(foo)'
 */
export default curry(surround)

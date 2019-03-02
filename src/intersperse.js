import curry from './curry'
import intersperse from './uncurried/intersperse'

/**
 * Intersperses the elements of a list with separator.
 *
 * @function
 * @param {String} s The separator value.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` interspersed with the separator `s`.
 * @example
 *
 * import { intersperse } from 'fkit'
 * intersperse(4, [1, 2, 3]) // [1, 4, 2, 4, 3]
 * intersperse('-', 'foo') // 'f-o-o'
 */
export default curry(intersperse)

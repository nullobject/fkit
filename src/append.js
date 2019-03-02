import append from './uncurried/append'
import curry from './curry'

/**
 * Appends a value to a list.
 *
 * @function
 * @param a The value to append.
 * @param {Array|String} bs The list.
 * @returns {Array|String} A list that contains the value `a` appended to the
 * list of `bs`.
 * @example
 *
 * import { append } from 'fkit'
 * append(3, [1, 2]) // [1, 2, 3]
 * append('o', 'fo') // 'foo'
 */
export default curry(append)

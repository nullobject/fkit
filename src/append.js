import curry from './curry'
import isString from './internal/isString'

/**
 * Appends a value to a list.
 *
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
export function append (a, bs) {
  return isString(bs) ? (bs + a) : bs.concat([a])
}

export default curry(append)

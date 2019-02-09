import curry from './curry'
import isString from './internal/isString'

/**
 * Prepends a value to a list.
 *
 * @param a The value to prepend.
 * @param {Array|String} bs The list.
 * @returns {Array|String} A list that contains the value `a` prepended to the
 * list of `bs`.
 * @example
 *
 * import { prepend } from 'fkit'
 * prepend(1, [2, 3]) // [1, 2, 3]
 * prepend('f', 'oo') // 'foo'
 */
export function prepend (a, bs) {
  return isString(bs) ? (a + bs) : [a].concat(bs)
}

export default curry(prepend)

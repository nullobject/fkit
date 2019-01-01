import curry from './curry'
import isString from './internal/isString'

export function prepend (a, bs) {
  return isString(bs) ? (a + bs) : [a].concat(bs)
}

/**
 * Returns a list that contains the value `a` prepended to the list of `bs`.
 *
 * @summary Prepends a value to a list.
 *
 * @example
 *
 * F.prepend(1, [2, 3]) // [1, 2, 3]
 * F.prepend('f', 'oo') // 'foo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(prepend)

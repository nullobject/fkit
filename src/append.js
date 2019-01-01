import curry from './curry'
import isString from './internal/isString'

export function append (a, bs) {
  return isString(bs) ? (bs + a) : bs.concat([a])
}

/**
 * Returns a list that contains the value `a` appended to the list of `bs`.
 *
 * @summary Appends a value to a list.
 *
 * @example
 *
 * F.append(3, [1, 2]) // [1, 2, 3]
 * F.append('o', 'fo') // 'foo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(append)

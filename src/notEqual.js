import curry from './curry'

export function notEqual (a, b) {
  return b !== a
}

/**
 * Returns `true` if the value `a` is strictly not equal (`!==`) to the value
 * `b`, false otherwise.
 *
 * @summary The strict inequality operator.
 *
 * F.notEqual(1, 1) // false
 * F.notEqual(1, 2) // true
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export default curry(notEqual)

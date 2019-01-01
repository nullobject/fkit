import curry from './curry'

/**
 * Determines whether two values are not equal.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} `true` if the value `a` is strictly not equal (`!==`) to
 * the value `b`, false otherwise.
 *
 * @example
 *
 * F.notEqual(1, 1) // false
 * F.notEqual(1, 2) // true
 */
export function notEqual (a, b) {
  return b !== a
}

export default curry(notEqual)

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
 * F.neq(1, 1) // false
 * F.neq(1, 2) // true
 */
export function neq (a, b) {
  return b !== a
}

export default curry(neq)

import curry from './curry'

/**
 * Determines whether two values are equal.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} `true` if the value `a` is strictly not equal (`===`) to
 * the value `b`, false otherwise.
 *
 * @example
 *
 * F.equal(1, 1) // true
 * F.equal(1, 2) // false
 */
export function equal (a, b) {
  return b === a
}

export default curry(equal)

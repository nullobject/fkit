/**
 * Returns the logical NOT of a value.
 *
 * @param a A value.
 * @returns {Boolean} `true` if `a` is not truthy, `false` otherwise.
 * @example
 *
 * import { not } from 'fkit'
 * not(true) // false
 * not(false) // true
 */
export default function not (a) {
  return !a
}

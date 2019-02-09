/**
 * Determines whether a number is even.
 *
 * @param {Number} a The number.
 * @returns {Boolean} `true` if the number `a` is even, false otherwise.
 * @example
 *
 * import { even } from 'fkit'
 * even(2) // true
 * even(1) // false
 */
export default function even (a) {
  return !(a % 2)
}

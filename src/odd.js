/**
 * Determines whether a number is odd.
 *
 * @param {Number} a A number.
 * @returns {Boolean} `true` if the number `a` is odd, false otherwise.
 * @example
 *
 * import { odd } from 'fkit'
 * odd(2) // true
 * odd(1) // false
 */
export default function odd (a) {
  return !!(a % 2)
}

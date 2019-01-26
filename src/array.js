/**
 * Creates a new array.
 *
 * @param {Number} n The length of the array.
 * @returns {Array} An array of length `n`.
 * @example
 *
 * import { array } from 'fkit'
 * array(3) // [undefined, undefined, undefined]
 */
export default function array (n) {
  return Array.apply(null, Array(n))
}

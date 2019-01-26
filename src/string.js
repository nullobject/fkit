import array from './array'

/**
 * Creates a new string.
 *
 * @param {Number} n The length of the string.
 * @returns {String} A string of length `n`.
 * @example
 *
 * import { string } from 'fkit'
 * string(3) // '   '
 */
export default function string (n) {
  return array(n + 1).join(' ')
}

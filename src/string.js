import array from './array'

/**
 * Returns an string of length `n`.
 *
 * @summary Creates a new string.
 *
 * @example
 *
 * F.string(3) // '   '
 *
 * @param n A number.
 * @returns A new string.
 */
export default function string (n) {
  return array(n + 1).join(' ')
}

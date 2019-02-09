import array from './array'
import curry from './curry'

/**
 * Creates a new array of numbers.
 *
 * @param {Number} a The starting number.
 * @param {Number} n The number of numbers to create.
 * @returns {Array} An array of numbers of length `n` starting from `a`.
 * @example
 *
 * import { range } from 'fkit'
 * range(1, 3) // [1, 2, 3]
 */
export function range (a, n) {
  return array(n).map((_, i) => a + i)
}

export default curry(range)

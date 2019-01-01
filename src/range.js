import array from './array'
import curry from './curry'

export function range (a, n) {
  return array(n).map((_, i) => a + i)
}

/**
 * Returns an array of numbers of length `n` starting from `a`.
 *
 * @summary Creates a new array of numbers.
 *
 * @example
 *
 * F.range(1, 3) // [1, 2, 3]
 *
 * @curried
 * @function
 * @param a A number.
 * @param n A number.
 * @returns A new array.
 */
export default curry(range)

import add from './add'
import fold from './fold'

/**
 * Returns the sum of the elements in the list of `as`.
 *
 * @summary Calculates the sum of the elements in a list.
 *
 * @example
 *
 * F.sum([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export default function sum (as) {
  return fold(add, 0, as)
}

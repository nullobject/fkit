import add from './add'
import { fold } from './fold'

/**
 * Calculates the sum of the elements in a list.
 *
 * @param {Array} as The list.
 * @returns {Number} The sum of the elements in the list of `as`.
 * @example
 *
 * import { sum } from 'fkit'
 * sum([1, 2, 3]) // 6
 */
export default function sum (as) {
  return fold(add, 0, as)
}

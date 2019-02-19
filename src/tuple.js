/**
 * Creates a new tuple.
 *
 * @param as The values.
 * @returns {Array} A tuple with the values from `as`.
 * @example
 *
 * import { tuple } from 'fkit'
 * tuple(1, 2, 3) // [1, 2, 3]
 * tuple('a', 'b', 'c') // ['a', 'b', 'c']
 */
export default function tuple (...as) {
  return as
}

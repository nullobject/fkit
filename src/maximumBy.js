import curry from './curry'
import { fold } from './fold'

/**
 * Calculates the maximum value of a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @returns The maximum value in the list of `as` using the comparator function
 * `f`.
 * @example
 *
 * import { compare, maximumBy } from 'fkit'
 * maximumBy(compare, [1, 2, 3]) // 3
 * maximumBy(compare, 'abc') // 'c'
 */
export function maximumBy (f, as) {
  return fold((a, b) => f(a, b) > 0 ? a : b, as[0], as)
}

export default curry(maximumBy)

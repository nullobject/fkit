import curry from './curry'
import { fold } from './fold'

/**
 * Calculates the minimum value of a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal, then the comparator function should return `0`.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @returns The minimum value in the list of `as` using the comparator function
 * `f`.
 * @example
 *
 * import { compare, minimumBy } from 'fkit'
 * minimumBy(compare, [1, 2, 3]) // 1
 * minimumBy(compare, 'abc') // 'a'
 */
export function minimumBy (f, as) {
  return fold((a, b) => f(a, b) < 0 ? a : b, as[0], as)
}

export default curry(minimumBy)

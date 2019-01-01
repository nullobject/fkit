import curry from './curry'
import fold from './fold'

/**
 * Returns the minimum value in the list of `as` using the comparator function
 * `f`.
 *
 * @summary Calculates the minimum value of a list using a comparator
 * function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal, then the comparator function should return `0`.
 *
 * @example
 *
 * F.minimumBy(F.compare, [1, 2, 3]) // 1
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A value.
 */
export default curry((f, as) =>
  fold((a, b) => f(a, b) < 0 ? a : b, as[0], as)
)

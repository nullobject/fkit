import curry from './curry'
import toArray from './internal/toArray'
import toList from './internal/toList'

export function sortBy (c, as) {
  const bs = toArray(as.slice(0))
  return toList(bs.sort(c), typeof as)
}

/**
 * Returns a list that contains the elements in the list of `as` sorted using
 * the comparator function `c`.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @summary Sorts a list using a comparator function.
 *
 * @example
 *
 * F.sortBy((a, b) =>
 *   a > b ? 1 : (a < b ? -1 : 0)
 * , [2, 3, 1]) // [1, 2, 3]
 *
 * @curried
 * @function
 * @param c A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(sortBy)

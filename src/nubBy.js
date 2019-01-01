import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import tail from './tail'
import { filter } from './filter'
import { prepend } from './prepend'

export function nubBy (f, as) {
  const a = head(as)

  return empty(as)
    ? mempty(as)
    : prepend(
      a,
      nubBy(f, filter(b => !f(a, b), tail(as)))
    )
}

/**
 * Returns a list with all duplicate elements removed from the list of `bs`.
 * The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Removes duplicate elements from a list using a comparator function.
 *
 * @example
 *
 * F.nubBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(nubBy)

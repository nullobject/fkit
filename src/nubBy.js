import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import tail from './tail'
import { filter } from './filter'
import { prepend } from './prepend'

/**
 * Removes duplicate elements from a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list with all duplicate elements removed from the
 * list of `bs`.
 *
 * @example
 *
 * F.nubBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * F.nubBy((a, b) => a === b, 'abbccc') // 'abc'
 */
export function nubBy (f, as) {
  const a = head(as)

  return empty(as)
    ? mempty(as)
    : prepend(
      a,
      nubBy(f, filter(b => !f(a, b), tail(as)))
    )
}

export default curry(nubBy)

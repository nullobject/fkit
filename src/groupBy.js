import curry from './curry'
import empty from './empty'
import head from './head'
import last from './last'
import span from './span'
import tail from './tail'
import { prepend } from './prepend'

/**
 * Groups the values in a list using a comparator function.
 *
 * The comparator function `f` compares two values, `a` and `b`. If the values
 * are both considered to be in the same group, then the comparator function
 * should return `true`. Otherwise it should return `false`.
 *
 * @param {Function} c A comparator function.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the values in the list of `as`
 * grouped into sublists that satisfy the comparator function `c`.
 *
 * @example
 *
 * F.groupBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * F.groupBy((a, b) => a === b, 'Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 */
export function groupBy (c, as) {
  const b = head(as)
  const bs = span(a => c(a, b), tail(as))

  return empty(as)
    ? []
    : prepend(
      prepend(b, head(bs)),
      groupBy(c, last(bs))
    )
}

export default curry(groupBy)

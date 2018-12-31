import curry from './curry'
import empty from './empty'
import head from './head'
import last from './last'
import prepend from './prepend'
import span from './span'
import tail from './tail'

/**
 * Returns a list that contains the elements in the list of `as` grouped into
 * sublists that satisfy the comparator function `c`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to be in the same group, then the comparator function
 * should return `true`. Otherwise it should return `false`.
 *
 * @summary Groups the elements in a list using a comparator function.
 *
 * @example
 *
 * F.groupBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 *
 * @curried
 * @function
 * @param c A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(function groupBy (c, as) {
  const b = head(as)
  const bs = span(a => c(a, b), tail(as))

  return empty(as)
    ? []
    : prepend(
      prepend(b, head(bs)),
      groupBy(c, last(bs))
    )
})

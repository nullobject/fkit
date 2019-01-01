import concat from './concat'
import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import tail from './tail'

/**
 * Returns a list that contains the elements in the list of `as` interspersed
 * with the separator `s`.
 *
 * @summary Intersperses the elements of a list with separator.
 *
 * @example
 *
 * F.intersperse(4, [1, 2, 3]) // [1, 4, 2, 4, 3]
 * F.intersperse('-', 'foo') // 'f-o-o'
 *
 * @curried
 * @function
 * @param s A separator.
 * @param as A list.
 * @returns A new list.
 */
export default curry((s, as) => {
  const prependToAll = bs =>
    empty(bs)
      ? mempty(bs)
      : concat(s, head(bs), prependToAll(tail(bs)))

  return empty(as)
    ? mempty(as)
    : concat(head(as), prependToAll(tail(as)))
})

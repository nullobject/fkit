import concat from './concat'
import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import tail from './tail'

/**
 * Intersperses the elements of a list with separator.
 *
 * @param {String} s A separator.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` interspersed with the separator `s`.
 *
 * @example
 *
 * F.intersperse(4, [1, 2, 3]) // [1, 4, 2, 4, 3]
 * F.intersperse('-', 'foo') // 'f-o-o'
 */
export function intersperse (s, as) {
  const prependToAll = bs =>
    empty(bs)
      ? mempty(bs)
      : concat(s, head(bs), prependToAll(tail(bs)))

  return empty(as)
    ? mempty(as)
    : concat(head(as), prependToAll(tail(as)))
}

export default curry(intersperse)

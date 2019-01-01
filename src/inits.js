import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import prepend from './prepend'
import tail from './tail'

/**
 * Gets all initial segments of a list.
 *
 * @param {Array|String} as A list.
 * @returns {Array} A list that contains all initial segments of the list of
 * `as`.
 *
 * @example
 *
 * F.inits([1, 2, 3]) // [[], [1], [1, 2], [1, 2, 3]]
 * F.inits('foo') // ['', 'f', 'fo', 'foo']
 */
export default function inits (as) {
  return prepend(
    mempty(as),
    empty(as)
      ? []
      : inits(tail(as)).map(prepend(head(as)))
  )
}

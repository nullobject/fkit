import empty from './empty'
import prepend from './uncurried/prepend'
import tail from './tail'

/**
 * Gets all final segments of a list.
 *
 * @param {Array|String} as The list.
 * @returns {Array} A list that contains all final segments of the list of
 * `as`.
 * @example
 *
 * import { tails } from 'fkit'
 * tails([1, 2, 3]) // [[1, 2, 3], [2, 3], [3], []]
 * tails('foo') // ['foo', 'oo', 'o', '']
 */
export default function tails (as) {
  return prepend(
    as,
    empty(as) ? [] : tails(tail(as))
  )
}

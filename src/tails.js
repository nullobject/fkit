import empty from './empty'
import prepend from './prepend'
import tail from './tail'

/**
 * Returns a list that contains all final segments of the list of `as`.
 *
 * @summary Gets all final segments of a list.
 *
 * @example
 *
 * F.tails([1, 2, 3]) // [[1, 2, 3], [2, 3], [3], []]
 * F.tails('foo') // ['foo', 'oo', 'o', '']
 *
 * @param as A list.
 * @returns A new list.
 */
export default function tails (as) {
  return prepend(as, empty(as) ? [] : tails(tail(as)))
}

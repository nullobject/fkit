import flip from './flip'
import mempty from './internal/mempty'
import prepend from './prepend'

/**
 * Reverses the elements in a list.
 *
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` in reverse order.
 * @example
 *
 * import { reverse } from 'fkit'
 * reverse([1, 2, 3]) // [3, 2, 1]
 * reverse('foo') // 'oof'
 */
export default function (as) {
  return Array.from(as).reduce(flip(prepend), mempty(as))
}

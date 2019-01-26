import curry from './curry'
import compose from './compose'
import concatWith from './internal/concatWith'
import flattenStrings from './internal/flattenStrings'
import mempty from './internal/mempty'
import toArray from './internal/toArray'

/**
 * Maps a function over a list and concatenates the results.
 *
 * @param {Function} f A function that returns a list.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as`, mapped with the function `f`, and concatenated together.
 * @example
 *
 * import { concatMap } from 'fkit'
 * concatMap(a => [a, 0], [1, 2, 3]) // [1, 0, 2, 0, 3, 0]
 * concatMap(a => [a, '-'], 'foo') // 'f-o-o-'
 */
export function concatMap (f, as) {
  const bs = toArray(as).map(compose(flattenStrings, f))
  const cs = bs.length > 0 ? bs : as
  return concatWith(mempty(cs), bs)
}

export default curry(concatMap)

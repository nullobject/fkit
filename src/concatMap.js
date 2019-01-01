import curry from './curry'
import compose from './compose'
import concatWith from './internal/concatWith'
import flattenStrings from './internal/flattenStrings'
import mempty from './internal/mempty'
import toArray from './internal/toArray'

export function concatMap (f, as) {
  const bs = toArray(as).map(compose(flattenStrings, f))
  const cs = bs.length > 0 ? bs : as
  return concatWith(mempty(cs), bs)
}

/**
 * Returns a list that contains the elements in the list of `as` mapped with
 * the function `f` concatenated together.
 *
 * @summary Maps a function over a list and concatenates the results.
 *
 * @example
 *
 * F.concatMap(a => [a, 0], [1, 2, 3]) // [1, 0, 2, 0, 3, 0]
 *
 * F.concatMap(a => [a, '-'], 'foo') // 'f-o-o-'
 *
 * @curried
 * @function
 * @param f A function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(concatMap)

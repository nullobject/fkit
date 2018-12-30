import curry from '../curry'
import { mempty, prepend, toArray } from './base'
import { pair } from './build'

/**
 * This module defines zip operations on lists.
 *
 * @private
 * @module fkit/list/zip
 */

/**
 * Returns the lists of `as` and `bs` zipped with the binary function `f`.
 *
 * @summary Zips two lists with a function.
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const zipWith = curry((f, as, bs) => {
  const n = Math.min(as.length, bs.length)
  return toArray(as.slice(0, n)).map((a, i) => f(a, bs[i]))
})

/**
 * Returns the lists of `as` and `bs` zipped into a list of pairs.
 *
 * It is a special case of the `zipWith` function where the elements are
 * combined using the `F.pair` function.
 *
 * @summary Zips two lists into list of pairs.
 *
 * @example
 *
 * F.zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
 * F.zip('foo', 'bar') // [['f', 'b'], ['o', 'a'], ['o', 'r']]
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const zip = curry((as, bs) => zipWith(pair, as, bs))

/**
 * Returns the list of pairs `as` unzipped into a pair of lists.
 *
 * @summary Unzips a list of pairs into a pair of lists.
 *
 * @example
 *
 * F.unzip([[1, 4], [2, 5], [3, 6]]) // [[1, 2, 3], [4, 5, 6]]
 * F.unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]) // ['foo', 'bar']
 *
 * @function
 * @param as A list.
 * @returns A new list.
 */
export const unzip = as => {
  const s = mempty(as[0])

  return as.reduceRight((p, ps) => {
    const a = ps[0]
    const b = ps[1]
    const as = p[0]
    const bs = p[1]

    return [prepend(a, as), prepend(b, bs)]
  }, [s, s])
}

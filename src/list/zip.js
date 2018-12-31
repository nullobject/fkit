import mempty from '../internal/mempty'
import prepend from '../prepend'

/**
 * This module defines zip operations on lists.
 *
 * @private
 * @module fkit/list/zip
 */

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

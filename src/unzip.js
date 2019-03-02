import mempty from './internal/mempty'
import prepend from './uncurried/prepend'

/**
 * Unzips a list of pairs into a pair of lists.
 *
 * @param {Array} as The list.
 * @returns {Array} The list of pairs `as` unzipped into a pair of lists.
 * @example
 *
 * import { unzip } from 'fkit'
 * unzip([[1, 4], [2, 5], [3, 6]]) // [[1, 2, 3], [4, 5, 6]]
 * unzip([['f', 'b'], ['o', 'a'], ['o', 'r']]) // ['foo', 'bar']
 */
export default function unzip (as) {
  const s = mempty(as[0])

  return as.reduceRight((p, ps) => {
    const a = ps[0]
    const b = ps[1]
    const as = p[0]
    const bs = p[1]

    return [prepend(a, as), prepend(b, bs)]
  }, [s, s])
}

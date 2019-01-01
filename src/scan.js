import curry from './curry'
import { fold } from './fold'
import { tap } from './tap'

/**
 * Scans a list from left-to-right with a function.
 *
 * @param {Function} f A binary function.
 * @param s A starting value.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` scanned left-to-right with the binary function `f` and starting value
 * `s`.
 *
 * @example
 *
 * F.scan(F.flip(F.prepend), [],  [1, 2, 3]) // [[], [1], [2, 1], [3, 2, 1]]
 * F.scan(F.flip(F.prepend), '',  'foo') // ['', 'f', 'of', 'oof']
 */
export function scan (f, s, as) {
  const r = [s]
  fold((b, a) => tap(r.push.bind(r), f(b, a)), s, as)
  return r
}

export default curry(scan)

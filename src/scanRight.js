import curry from './curry'
import { foldRight } from './foldRight'
import { tap } from './tap'

/**
 * Scans a list from right-to-left with a function.
 *
 * @param {Function} f A binary function.
 * @param s A starting value.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` scanned right-to-left with the binary function `f` and starting value
 * `s`.
 *
 * @example
 *
 * F.scanRight(F.append, [],  [1, 2, 3]) // [[3, 2, 1], [3, 2], [3], []]
 * F.scanRight(F.append, '',  'foo') // ['oof', 'oo', 'o', '']
 */
export function scanRight (f, s, as) {
  const r = [s]
  foldRight((a, b) => tap(r.unshift.bind(r), f(a, b)), s, as)
  return r
}

export default curry(scanRight)

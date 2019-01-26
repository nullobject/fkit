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
 * @example
 *
 * import { scan } from 'fkit'
 * scan((a, b) => a.concat(b), [],  [1, 2, 3]) // [[], [1], [1, 2], [1, 2, 3]]
 * scan((a, b) => a.concat(b), '',  'foo') // ['', 'f', 'fo', 'foo']
 */
export function scan (f, s, as) {
  const r = [s]
  fold((b, a) => tap(r.push.bind(r), f(b, a)), s, as)
  return r
}

export default curry(scan)

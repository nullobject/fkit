import curry from './curry'
import fold from './fold'
import tap from './tap'

export function scan (f, s, as) {
  const r = [s]
  fold((b, a) => tap(r.push.bind(r), f(b, a)), s, as)
  return r
}

/**
 * Returns a list that contains the elements in the list of `as` scanned
 * left-to-right with the binary function `f` and starting value `s`.
 *
 * @summary Scans a list from left to right with a function.
 *
 * @example
 *
 * F.scan(F.flip(F.prepend), [],  [1, 2, 3]) // [[], [1], [2, 1], [3, 2, 1]]
 * F.scan(F.flip(F.prepend), '',  'foo') // ['', 'f', 'of', 'oof']
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A new list.
 */
export default curry(scan)

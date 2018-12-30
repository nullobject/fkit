import curry from './curry'
import foldRight from './foldRight'
import tap from './tap'

/**
 * Returns a list that contains the elements in the list of `as` scanned
 * right-to-left with the binary function `f` and starting value `s`.
 *
 * @summary Scans a list from right to left with a function.
 *
 * @example
 *
 * F.scanRight(F.append, [],  [1, 2, 3]) // [[3, 2, 1], [3, 2], [3], []]
 * F.scanRight(F.append, '',  'foo') // ['oof', 'oo', 'o', '']
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A new list.
 */
export default curry((f, s, as) => {
  const r = [s]
  foldRight((a, b) => tap(r.unshift.bind(r), f(a, b)), s, as)
  return r
})

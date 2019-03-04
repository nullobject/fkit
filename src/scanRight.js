import curry from './curry'
import scanRight from './uncurried/scanRight'

/**
 * Scans a list from right-to-left with a function.
 *
 * @function
 * @param {Function} f The folding function.
 * @param s The starting value.
 * @param {Array|String} as The list to scan.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` scanned right-to-left with the binary function `f` and starting value
 * `s`.
 * @example
 *
 * import { scanRight } from 'fkit'
 * scanRight((b, a) => a.concat(b), [],  [1, 2, 3]) // [[3, 2, 1], [3, 2], [3], []]
 * scanRight((b, a) => a.concat(b), '',  'foo') // ['oof', 'oo', 'o', '']
 */
export default curry(scanRight)

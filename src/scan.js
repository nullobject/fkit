import curry from './curry'
import scan from './uncurried/scan'

/**
 * Scans a list from left-to-right with a function.
 *
 * @function
 * @param {Function} f The folding function.
 * @param s The starting value.
 * @param {Array|String} as The list to scan.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` scanned left-to-right with the binary function `f` and starting value
 * `s`.
 * @example
 *
 * import { scan } from 'fkit'
 * scan((a, b) => a.concat(b), [],  [1, 2, 3]) // [[], [1], [1, 2], [1, 2, 3]]
 * scan((a, b) => a.concat(b), '',  'foo') // ['', 'f', 'fo', 'foo']
 */
export default curry(scan)

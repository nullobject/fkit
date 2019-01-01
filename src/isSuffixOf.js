import curry from './curry'
import { isPrefixOf } from './isPrefixOf'
import reverse from './reverse'

export function isSuffixOf (as, bs) {
  return isPrefixOf(reverse(as), reverse(bs))
}

/**
 * Returns `true` if the list of `as` is a suffix of the list of `bs`, `false`
 * otherwise.
 *
 * @summary Determines if a list is a suffix of another list.
 *
 * @example
 *
 * F.isSuffixOf([], [1, 2, 3]) // true
 * F.isSuffixOf([1, 2], [1, 2, 3]) // false
 * F.isSuffixOf([2, 3], [1, 2, 3]) // true
 *
 * F.isSuffixOf('', 'foo') // true
 * F.isSuffixOf('fo', 'foo') // false
 * F.isSuffixOf('oo', 'foo') // true
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export default curry(isSuffixOf)

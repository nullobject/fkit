import curry from './curry'
import { isPrefixOf } from './isPrefixOf'
import reverse from './reverse'

/**
 * Determines if a list is a suffix of another list.
 *
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Boolean} `true` if the list of `as` is a suffix of the list of
 * `bs`, `false` otherwise.
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
 */
export function isSuffixOf (as, bs) {
  return isPrefixOf(reverse(as), reverse(bs))
}

export default curry(isSuffixOf)

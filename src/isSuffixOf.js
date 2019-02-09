import curry from './curry'
import { isPrefixOf } from './isPrefixOf'
import reverse from './reverse'

/**
 * Determines if a list is a suffix of another list.
 *
 * @param {Array|String} as The suffix.
 * @param {Array|String} bs The list to check.
 * @returns {Boolean} `true` if the list of `as` is a suffix of the list of
 * `bs`, `false` otherwise.
 * @example
 *
 * import { isSuffixOf } from 'fkit'
 *
 * isSuffixOf([], [1, 2, 3]) // true
 * isSuffixOf([1, 2], [1, 2, 3]) // false
 * isSuffixOf([2, 3], [1, 2, 3]) // true
 *
 * isSuffixOf('', 'foo') // true
 * isSuffixOf('fo', 'foo') // false
 * isSuffixOf('oo', 'foo') // true
 */
export function isSuffixOf (as, bs) {
  return isPrefixOf(reverse(as), reverse(bs))
}

export default curry(isSuffixOf)

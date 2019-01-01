import { any } from './any'
import curry from './curry'
import isPrefixOf from './isPrefixOf'
import tails from './tails'

/**
 * Determines if a list is contained within another list.
 *
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Boolean} `true` if the list of `as` is contained within the list
 * of `bs`, `false` otherwise.
 *
 * @example
 *
 * F.isInfixOf([], [1, 2, 3]) // true
 * F.isInfixOf([2, 3], [1, 2, 3]) // true
 * F.isInfixOf([3, 2], [1, 2, 3]) // false
 *
 * F.isInfixOf('', 'foo') // true
 * F.isInfixOf('oo', 'foo') // true
 * F.isInfixOf('of', 'foo') // false
 */
export function isInfixOf (as, bs) {
  return any(isPrefixOf(as), tails(bs))
}

export default curry(isInfixOf)

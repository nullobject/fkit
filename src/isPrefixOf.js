import curry from './curry'
import empty from './empty'
import head from './head'
import tail from './tail'

/**
 * Determines if a list is a prefix of another list.
 *
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Boolean} `true` if the list of `as` is a prefix of the list of
 * `bs`, `false` otherwise.
 * @example
 *
 * import { isPrefixOf } from 'fkit'
 *
 * isPrefixOf([], [1, 2, 3]) // true
 * isPrefixOf([1, 2], [1, 2, 3]) // true
 * isPrefixOf([2, 3], [1, 2, 3]) // false
 *
 * isPrefixOf('', 'foo') // true
 * isPrefixOf('fo', 'foo') // true
 * isPrefixOf('oo', 'foo') // false
 */
export function isPrefixOf (as, bs) {
  if (empty(as)) {
    return true
  } else if (empty(bs)) {
    return false
  } else {
    return head(as) === head(bs) && isPrefixOf(tail(as), tail(bs))
  }
}

export default curry(isPrefixOf)

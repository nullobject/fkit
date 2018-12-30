import curry from './curry'
import empty from './empty'
import head from './head'
import tail from './tail'

/**
 * Returns `true` if the list of `as` is a prefix of the list of `bs`, `false`
 * otherwise.
 *
 * @summary Determines if a list is a prefix of another list.
 *
 * @example
 *
 * F.isPrefixOf([], [1, 2, 3]) // true
 * F.isPrefixOf([1, 2], [1, 2, 3]) // true
 * F.isPrefixOf([2, 3], [1, 2, 3]) // false
 *
 * F.isPrefixOf('', 'foo') // true
 * F.isPrefixOf('fo', 'foo') // true
 * F.isPrefixOf('oo', 'foo') // false
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export default curry(function isPrefixOf (as, bs) {
  if (empty(as)) {
    return true
  } else if (empty(bs)) {
    return false
  } else {
    return head(as) === head(bs) && isPrefixOf(tail(as), tail(bs))
  }
})

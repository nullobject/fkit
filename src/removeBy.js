import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import tail from './tail'
import { prepend } from './prepend'

/**
 * Removes the first occurance of an element from a list using a comparator
 * function.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are both considered to equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * @param {Function} f The comparator function.
 * @param a The value to find.
 * @param {Array|String} bs The list.
 * @returns {Array|String} A list with the first occurance of the element `a`
 * removed from the list of `bs`.
 * @example
 *
 * import { removeBy } from 'fkit'
 * removeBy((a, b) => a === b, 2, [1, 2, 3]) // [1, 3]
 * removeBy((a, b) => a === b, 'f', 'foo') // 'oo'
 */
export function removeBy (f, a, bs_) {
  const b = head(bs_)
  const bs = tail(bs_)

  return empty(bs_)
    ? mempty(bs_)
    : f(a, b) ? bs : prepend(b, removeBy(f, a, bs))
}

export default curry(removeBy)

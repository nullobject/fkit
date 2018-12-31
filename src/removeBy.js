import curry from './curry'
import empty from './empty'
import head from './head'
import mempty from './internal/mempty'
import prepend from './prepend'
import tail from './tail'

/**
 * Returns a list with the first occurance of the element `a` removed from the
 * list of `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Removes the first occurance of an element from a list using a
 * comparator function.
 *
 * @example
 *
 * F.removeBy((a, b) => a === b, 2, [1, 2, 3]) // [1, 3]
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(function removeBy (f, a, bs_) {
  const b = head(bs_)
  const bs = tail(bs_)

  return empty(bs_)
    ? mempty(bs_)
    : f(a, b) ? bs : prepend(b, removeBy(f, a, bs))
})

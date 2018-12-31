import curry from '../curry'
import drop from '../drop'
import empty from '../empty'
import equal from '../equal'
import head from '../head'
import isString from '../internal/isString'
import last from '../last'
import prepend from '../prepend'
import tail from '../tail'
import take from '../take'

/**
 * This module defines sublist operations on lists.
 *
 * @private
 * @module fkit/list/sublist
 */

/**
 * Returns the prefix of elements from the list of `as` while the predicate
 * function `p` is satisfied.
 *
 * @summary Gets the prefix of a list using a predicate function.
 *
 * @example
 *
 * F.takeWhile(F.lt(3), [1, 2, 3]) // [1, 2]
 * F.takeWhile(F.neq(o), 'foo') // 'f'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export const takeWhile = curry((p, as) => {
  let s = isString(as) ? '' : []
  const n = as.length

  for (let i = 0; i < n && p(as[i]); i++) {
    s = s.concat(as[i])
  }

  return s
})

/**
 * Returns the suffix after dropping elements from the list of `as` while the
 * predicate function `p` is satisfied.
 *
 * @summary Gets the suffix of a list using a predicate function.
 *
 * @example
 *
 * F.dropWhile(F.lt(3), [1, 2, 3]) // [3]
 * F.dropWhile(F.neq(o), 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export const dropWhile = curry((p, as) => {
  let s = isString(as) ? '' : []
  const m = as.length
  let n = 0

  while (n < m && p(as[n])) {
    n++
  }

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
})

/**
 * Returns a list that contains the elements in the list of `as` split into a
 * pair of lists: a prefix of length `n` and the remainder of the list.
 *
 * @summary Splits a list.
 *
 * @example
 *
 * F.splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
 * F.splitAt(1, 'foo') // ['f', 'oo']
 *
 * @curried
 * @function
 * @param n A number.
 * @param as A list.
 * @returns A pair of lists.
 */
export const splitAt = curry((n, as) => [take(n, as), drop(n, as)])

/**
 * Returns a list that contains the elements in the list of `as` split into a
 * pair of lists: a prefix of elements that satisfy the predicate function `p`
 * and the remainder of the list.
 *
 * @summary Splits a list using a predicate function.
 *
 * @example
 *
 * F.span(F.lt(3), [1, 2, 3]) // [[1, 2], [3]]
 * F.span(F.neq(o), 'foo') // ['f', 'oo']
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A pair of lists.
 */
export const span = curry((p, as) => [takeWhile(p, as), dropWhile(p, as)])

/**
 * Returns a list that contains the elements in the list of `as` grouped into
 * sublists of equal elements.
 *
 * It is a special case of the `groupBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Groups the elements in a list.
 *
 * @example
 *
 * F.group([1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * F.group('Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 *
 * @param as A list.
 * @returns A new list.
 */
export function group (as) { return groupBy(equal, as) }

/**
 * Returns a list that contains the elements in the list of `as` grouped into
 * sublists that satisfy the comparator function `c`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to be in the same group, then the comparator function
 * should return `true`. Otherwise it should return `false`.
 *
 * @summary Groups the elements in a list using a comparator function.
 *
 * @example
 *
 * F.groupBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 *
 * @curried
 * @function
 * @param c A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export const groupBy = curry(function groupBy (c, as) {
  const b = head(as)
  const bs = span(a => c(a, b), tail(as))

  return empty(as)
    ? []
    : prepend(
      prepend(b, head(bs)),
      groupBy(c, last(bs))
    )
})

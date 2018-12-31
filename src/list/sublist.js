import curry from '../curry'
import drop from '../drop'
import dropWhile from '../dropWhile'
import empty from '../empty'
import equal from '../equal'
import head from '../head'
import isString from '../internal/isString'
import last from '../last'
import prepend from '../prepend'
import tail from '../tail'
import take from '../take'
import takeWhile from '../takeWhile'

/**
 * This module defines sublist operations on lists.
 *
 * @private
 * @module fkit/list/sublist
 */

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

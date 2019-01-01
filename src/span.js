import curry from './curry'
import { dropWhile } from './dropWhile'
import { takeWhile } from './takeWhile'

export function span (p, as) {
  return [takeWhile(p, as), dropWhile(p, as)]
}

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
export default curry(span)

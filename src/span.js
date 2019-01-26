import curry from './curry'
import { dropWhile } from './dropWhile'
import { takeWhile } from './takeWhile'

/**
 * Splits a list using a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array} A list that contains the elements in the list of `as` split
 * into a pair of lists: a prefix of elements that satisfy the predicate
 * function `p` and the remainder of the list.
 * @example
 *
 * import { lt, neq, span } from 'fkit'
 * span(lt(3), [1, 2, 3]) // [[1, 2], [3]]
 * span(neq(o), 'foo') // ['f', 'oo']
 */
export function span (p, as) {
  return [takeWhile(p, as), dropWhile(p, as)]
}

export default curry(span)

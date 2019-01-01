import curry from './curry'
import { any } from './any'
import { append } from './append'
import { fold } from './fold'

export function unionBy (f, as, bs) {
  return fold((cs, b) => {
    return any(a => f(a, b), as) ? cs : append(b, cs)
  }, as, bs)
}

/**
 * Returns a list that contains the union of elements in the lists of `as` and
 * `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the union of two lists.
 *
 * @example
 *
 * F.unionBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * F.unionBy((a, b) => a === b, 'hello', 'world') // 'hellowrd'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(unionBy)

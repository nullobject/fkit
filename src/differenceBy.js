import curry from './curry'
import flip from './flip'
import removeBy from './removeBy'
import { fold } from './fold'

export function differenceBy (f, as, bs) {
  return fold(flip(removeBy(f)), as, bs)
}

/**
 * Returns a list that contains the difference of the elements in the lists of
 * `as` and `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Calculates the difference of two lists.
 *
 * @example
 *
 * F.differenceBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1]
 * F.differenceBy((a, b) => a === b, 'hello', 'world') // 'hel'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(differenceBy)

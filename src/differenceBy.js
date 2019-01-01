import curry from './curry'
import flip from './flip'
import removeBy from './removeBy'
import { fold } from './fold'

/**
 * Calculates the difference of two lists.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are considered to be equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array|String} A list that contains the difference of the elements
 * in the lists of `as` and `bs`.
 *
 *
 * @example
 *
 * F.differenceBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1]
 * F.differenceBy((a, b) => a === b, 'hello', 'world') // 'hel'
 */
export function differenceBy (f, as, bs) {
  return fold(flip(removeBy(f)), as, bs)
}

export default curry(differenceBy)

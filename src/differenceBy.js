import curry from './curry'
import flip from './flip'
import nub from './nub'
import removeBy from './removeBy'
import { fold } from './fold'

/**
 * Calculates the difference of two lists.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are considered to be equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * @param {Function} f The comparator function.
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array|String} A list that contains the difference of the elements
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { differenceBy } from 'fkit'
 * differenceBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1]
 * differenceBy((a, b) => a === b, 'hello', 'world') // 'he'
 */
export function differenceBy (f, as, bs) {
  return fold(flip(removeBy(f)), nub(as), nub(bs))
}

export default curry(differenceBy)

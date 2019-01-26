import curry from './curry'
import { any } from './any'
import { append } from './append'
import { fold } from './fold'

/**
 * Calculates the union of two lists.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are both considered to equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array|String} A list that contains the union of elements in the
 * lists of `as` and `bs`.
 * @example
 *
 * import { unionBy } from 'fkit'
 * unionBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * unionBy((a, b) => a === b, 'hello', 'world') // 'hellowrd'
 */
export function unionBy (f, as, bs) {
  return fold((cs, b) => {
    return any(a => f(a, b), as) ? cs : append(b, cs)
  }, as, bs)
}

export default curry(unionBy)

import curry from './curry'
import unionBy from './uncurried/unionBy'

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
 * @function
 * @param {Function} f The comparator function.
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array|String} A list that contains the union of elements in the
 * lists of `as` and `bs`.
 * @example
 *
 * import { unionBy } from 'fkit'
 * unionBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * unionBy((a, b) => a === b, 'hello', 'world') // 'hellowrd'
 */
export default curry(unionBy)

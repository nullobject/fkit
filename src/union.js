import eq from './eq'
import unionBy from './unionBy'

/**
 * Calculates the union of two lists.
 *
 * This is a special case of the `unionBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array|String} A list that contains the union of elements in the
 * lists of `as` and `bs`.
 * @example
 *
 * import { union } from 'fkit'
 * union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * union('hello', 'world') // 'hellowrd'
 */
export default unionBy(eq)

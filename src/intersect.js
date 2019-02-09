import eq from './eq'
import intersectBy from './intersectBy'

/**
 * Calculates the intersection of two lists.
 *
 * This is a special case of the `intersectBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array|String} A list that contains the intersection of the elments
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { intersect } from 'fkit'
 * intersect([1, 2, 3], [2, 3, 4]) // [2, 3]
 * intersect('hello', 'world') // 'ol'
 */
export default intersectBy(eq)

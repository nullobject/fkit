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
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array|String} A list that contains the intersection of the elments
 * in the lists of `as` and `bs`.
 *
 * @example
 *
 * F.intersect([1, 2, 3], [2, 3, 4]) // [2, 3]
 * F.intersect('hello', 'world') // 'ol'
 */
export default intersectBy(eq)

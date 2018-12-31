import equal from './equal'
import intersectBy from './intersectBy'

/**
 * Returns a list that contains the intersection of the elments in the lists of
 * `as` and `bs`.
 *
 * It is a special case of the `intersectBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the intersection of two lists.
 *
 * @example
 *
 * F.intersect([1, 2, 3], [2, 3, 4]) // [2, 3]
 * F.intersect('hello', 'world') // 'ol'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default intersectBy(equal)

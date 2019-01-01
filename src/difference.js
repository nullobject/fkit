import differenceBy from './differenceBy'
import equal from './equal'

/**
 * Returns a list that contains the difference of the elements in the lists of
 * `as` and `bs`.
 *
 * It is a special case of the `differenceBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Calculates the difference of two lists.
 *
 * @example
 *
 * F.difference([1, 2, 3], [2, 3, 4]) // [1]
 * F.difference('hello', 'world') // 'hel'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default differenceBy(equal)

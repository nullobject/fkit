import equal from './equal'
import removeBy from './removeBy'

/**
 * Returns a list with the first occurance of the element `a` removed from the
 * list of `bs`.
 *
 * It is a special case of the `removeBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Removes the first occurance of an element from a list.
 *
 * @example
 *
 * F.remove(2, [1, 2, 3]) // [1, 3]
 * F.remove('f', 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export default removeBy(equal)

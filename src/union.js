import equal from './equal'
import unionBy from './unionBy'

/**
 * Returns a list that contains the union of elements in the lists of `as` and
 * `bs`.
 *
 * It is a special case of the `unionBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the union of two lists.
 *
 * @example
 *
 * F.union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * F.union('hello', 'world') // 'hellowrd'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default unionBy(equal)

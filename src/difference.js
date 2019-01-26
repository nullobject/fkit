import differenceBy from './differenceBy'
import eq from './eq'

/**
 * Calculates the difference of two lists.
 *
 * This is a special case of the `differenceBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @function
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array|String} A list that contains the difference of the elements
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { difference } from 'fkit'
 * difference([1, 2, 3], [2, 3, 4]) // [1]
 * difference('hello', 'world') // 'he'
 */
export default differenceBy(eq)

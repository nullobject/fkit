import eq from './eq'
import removeBy from './removeBy'

/**
 * Removes the first occurance of an element from a list.
 *
 * This is a special case of the `removeBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @function
 * @param a The value to remove.
 * @param {Array|String} bs The list.
 * @returns {Array|String} A list with the first occurance of the element `a`
 * removed from the list of `bs`.
 * @example
 *
 * import { remove } from 'fkit'
 * remove(2, [1, 2, 3]) // [1, 3]
 * remove('f', 'foo') // 'oo'
 */
export default removeBy(eq)

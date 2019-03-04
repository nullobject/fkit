import eq from './eq'
import nubBy from './nubBy'

/**
 * Removes duplicate elements from a list.
 *
 * This is a special case of the `nubBy` function where the elements are compared
 * using the strict equality `===` operator.
 *
 * @function
 * @param {Array|String} as The list.
 * @returns {Array|String} A list with all duplicate elements removed from the list of `as`.
 * @example
 *
 * import { nub } from 'fkit'
 * nub([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * nub('abbccc') // 'abc'
 */
export default nubBy(eq)

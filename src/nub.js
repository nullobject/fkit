import equal from './equal'
import nubBy from './nubBy'

/**
 * Removes duplicate elements from a list.
 *
 * This is a special case of the `nubBy` function where the elements are compared
 * using the strict equality `===` operator.
 *
 * @param {Array|String} as A list.
 * @returns {Array|String} A list with all duplicate elements removed from the list of `as`.
 *
 * @example
 *
 * F.nub([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * F.nub('abbccc') // 'abc'
 *
 */
export default nubBy(equal)

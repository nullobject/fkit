import equal from './equal'
import nubBy from './nubBy'

/**
 * Returns a list with all duplicate elements removed from the list of `as`.
 *
 * It is a special case of the `nubBy` function where the elements are compared
 * using the strict equality `===` operator.
 *
 * The resulting list will only contain unique elements.
 *
 * @summary Removes duplicate elements from a list.
 *
 * @example
 *
 * F.nub([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * F.nub('abbccc') // 'abc'
 *
 * @param as A list.
 * @returns A new list.
 */
export default nubBy(equal)

import equal from './equal'
import groupBy from './groupBy'

/**
 * Returns a list that contains the elements in the list of `as` grouped into
 * sublists of equal elements.
 *
 * It is a special case of the `groupBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Groups the elements in a list.
 *
 * @example
 *
 * F.group([1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * F.group('Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 *
 * @param as A list.
 * @returns A new list.
 */
export default groupBy(equal)

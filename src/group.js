import eq from './eq'
import groupBy from './groupBy'

/**
 * Groups the values in a list.
 *
 * This is a special case of the `groupBy` function where the values are compared
 * using the strict equality `===` operator.
 *
 * @function
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the values in the list of `as`
 * grouped into sublists of equal values.
 *
 * @example
 *
 * F.group([1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * F.group('Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 */
export default groupBy(eq)

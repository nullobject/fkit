import curry from './curry'
import groupBy from './uncurried/groupBy'

/**
 * Groups the values in a given list using a function or key path.
 *
 * @function
 * @param {Function|String} f The function or key path to group the values with.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the values the grouped values.
 * @example
 *
 * import { groupBy } from 'fkit'
 * groupBy(Math.floor, [1.1, 2.2, 3.3]) // ['1': [1], '2': [2], '3': [3]]
 * groupBy('length', ['one', 'two', 'three']) // ['3': ['one', 'two'], '5': ['three']]
 */
export default curry(groupBy)

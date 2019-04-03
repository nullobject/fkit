import curry from './curry'
import groupBy from './uncurried/groupBy'

/**
 * Groups values in a list using a grouping function.
 *
 * The grouping function `f` is applied to each item in the list. It should
 * return a value representing the group that each item belongs to.
 *
 * It is also possible to group a list of objects using a key path, instead of
 * a grouping function. The key path identifies the property to use when
 * grouping the objects in the list.
 *
 * @function
 * @param {Function|String} f The grouping function or key path used to group
 * the values in the list.
 * @param {Array|String} as The list.
 * @returns {Object} An object that contains the groups.
 * @example
 *
 * import { groupBy } from 'fkit'
 * groupBy(Math.floor, [1.1, 2.2, 3.3]) // { '1': [1], '2': [2], '3': [3] }
 * groupBy('length', ['one', 'two', 'three']) // { '3': ['one', 'two'], '5': ['three'] }
 * groupBy('a.b', [{ a: { b: 'foo' } }, { a: { b: 'bar' } }]) // { 'foo': [{ a: { b: 'foo' } }], 'bar': [{ a: { b: 'bar' } }] }
 */
export default curry(groupBy)

import curry from './curry'
import nubBy from './uncurried/nubBy'

/**
 * Removes duplicate elements from a list using a comparator function.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @function
 * @param {Function} f The comparator function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list with all duplicate elements removed from the
 * list of `bs`.
 * @example
 *
 * import { nubBy } from 'fkit'
 * nubBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * nubBy((a, b) => a === b, 'abbccc') // 'abc'
 */
export default curry(nubBy)

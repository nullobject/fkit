import curry from './curry'
import removeBy from './uncurried/removeBy'

/**
 * Removes the first occurance of an element from a list using a comparator
 * function.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are both considered to equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * @function
 * @param {Function} f The comparator function.
 * @param a The value to find.
 * @param {Array|String} bs The list.
 * @returns {Array|String} A list with the first occurance of the element `a`
 * removed from the list of `bs`.
 * @example
 *
 * import { removeBy } from 'fkit'
 * removeBy((a, b) => a === b, 2, [1, 2, 3]) // [1, 3]
 * removeBy((a, b) => a === b, 'f', 'foo') // 'oo'
 */
export default curry(removeBy)

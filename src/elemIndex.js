import curry from './curry'
import elemIndex from './uncurried/elemIndex'

/**
 * Gets the index of the first occurance of a value in a list.
 *
 * @function
 * @param a The value to find.
 * @param {Array|String} as The list.
 * @returns {Number} The index of the first occurance of the value `a` in the
 * list of `as`, or `undefined` if no value was found.
 * @example
 *
 * import { elemIndex } from 'fkit'
 *
 * elemIndex(0, [1, 2, 3]) // undefined
 * elemIndex(1, [1, 2, 3]) // 0
 *
 * elemIndex('a', 'foo') // undefined
 * elemIndex('o', 'foo') // 1
 */
export default curry(elemIndex)

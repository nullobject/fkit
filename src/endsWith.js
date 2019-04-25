import curry from './curry'
import endsWith from './uncurried/endsWith'

/**
 * Determines whether a given list ends with a suffix.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Boolean} `true` if the list `bs` ends with the list `as`, false
 * otherwise.
 * @example
 *
 * import { endsWith } from 'fkit'
 * endsWith([3], [1, 2, 3]) // true
 * endsWith('o', 'foo') // true
 */
export default curry(endsWith)

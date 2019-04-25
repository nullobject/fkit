import curry from './curry'
import startsWith from './uncurried/startsWith'

/**
 * Determines whether a given list starts with a prefix.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Boolean} `true` if the list `bs` starts with the list `as`, false
 * otherwise.
 * @example
 *
 * import { startsWith } from 'fkit'
 * startsWith([1], [1, 2, 3]) // true
 * startsWith('f', 'foo') // true
 */
export default curry(startsWith)

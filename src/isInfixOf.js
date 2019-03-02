import curry from './curry'
import isInfixOf from './uncurried/isInfixOf'

/**
 * Determines if a list is contained within another list.
 *
 * @function
 * @param {Array|String} as The list to find.
 * @param {Array|String} bs The list.
 * @returns {Boolean} `true` if the list of `as` is contained within the list
 * of `bs`, `false` otherwise.
 * @example
 *
 * import { isInfixOf } from 'fkit'
 *
 * isInfixOf([], [1, 2, 3]) // true
 * isInfixOf([2, 3], [1, 2, 3]) // true
 * isInfixOf([3, 2], [1, 2, 3]) // false
 *
 * isInfixOf('', 'foo') // true
 * isInfixOf('oo', 'foo') // true
 * isInfixOf('of', 'foo') // false
 */
export default curry(isInfixOf)

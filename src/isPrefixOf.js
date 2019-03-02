import curry from './curry'
import isPrefixOf from './uncurried/isPrefixOf'

/**
 * Determines if a list is a prefix of another list.
 *
 * @function
 * @param {Array|String} as The prefix.
 * @param {Array|String} bs The list to check.
 * @returns {Boolean} `true` if the list of `as` is a prefix of the list of
 * `bs`, `false` otherwise.
 * @example
 *
 * import { isPrefixOf } from 'fkit'
 *
 * isPrefixOf([], [1, 2, 3]) // true
 * isPrefixOf([1, 2], [1, 2, 3]) // true
 * isPrefixOf([2, 3], [1, 2, 3]) // false
 *
 * isPrefixOf('', 'foo') // true
 * isPrefixOf('fo', 'foo') // true
 * isPrefixOf('oo', 'foo') // false
 */
export default curry(isPrefixOf)

import curry from './curry'
import elem from './uncurried/elem'

/**
 * Determines if a value is present in a list.
 *
 * @function
 * @param a The value to find.
 * @param {Array|String} as The list.
 * @returns {Boolean} `true` if the list of `as` contains the value `a`,
 * `false` otherwise.
 * @example
 *
 * import { elem } from 'fkit'
 *
 * elem(0, [1, 2, 3]) // false
 * elem(1, [1, 2, 3]) // true
 *
 * elem('a', 'foo') // false
 * elem('o', 'foo') // true
 */
export default curry(elem)

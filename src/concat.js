import concatWith from './internal/concatWith'
import mempty from './internal/mempty'
import variadic from './variadic'

/**
 * Concatenates multiple lists into a single list.
 *
 * @function
 * @param {Array|String} as The lists to concatenate.
 * @returns {Array|String} A list that contains the concatenated elements in
 * the list of `as`.
 * @example
 *
 * import { concat } from 'fkit'
 * concat([1], [2, 3], [4, 5, 6]) // [1, 2, 3, 4, 5, 6]
 * concat('f', 'oo', 'bar') // 'foobar'
 */
export default variadic(as => concatWith(mempty(as), as))

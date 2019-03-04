import curry from './curry'
import pair from './uncurried/pair'

/**
 * Creates a new ordered pair.
 *
 * @function
 * @param a The first value.
 * @param b The second value.
 * @returns {Array} An ordered pair with the values `a` and `b`.
 * @example
 *
 * import { pair } from 'fkit'
 * pair(1, 2) // [1, 2]
 * pair('a', 'b') // ['a', 'b']
 */
export default curry(pair)

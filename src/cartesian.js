import cartesian from './uncurried/cartesian'
import curry from './curry'

/**
 * Calculates the [Cartesian
 * product](https://en.wikipedia.org/wiki/Cartesian_product) of two lists.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array} Returns a list that contains all the ordered pairs `[a, b]`
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { cartesian } from 'fkit'
 * cartesian([1, 2], [3, 4]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * cartesian('ab', 'cd') // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
 */
export default curry(cartesian)

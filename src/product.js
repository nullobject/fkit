import fold from './uncurried/fold'
import mul from './mul'

/**
 * Calculates the product of the elements in a list.
 *
 * @param {Array} as The list.
 * @returns {Number} The product of the elements in the list of `as`.
 * @example
 *
 * import { product } from 'fkit'
 * product([1, 2, 3]) // 6
 */
export default function product (as) {
  return fold(mul, 1, as)
}

import fold from './fold'
import mul from './mul'

/**
 * Calculates the product of the elements in a list.
 *
 * @param {Array} as A list.
 * @returns {Number} The product of the elements in the list of `as`.
 *
 * @example
 *
 * F.product([1, 2, 3]) // 6
 */
export default function product (as) {
  return fold(mul, 1, as)
}

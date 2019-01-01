import fold from './fold'
import mul from './mul'

/**
 * Returns the product of the elements in the list of `as`.
 *
 * @summary Calculates the product of the elements in a list.
 *
 * @example
 *
 * F.product([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export default function product (as) { return fold(mul, 1, as) }

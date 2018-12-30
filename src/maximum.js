import compare from './compare'
import maximumBy from './maximumBy'

/**
 * Returns the maximum value in the list of `as`.
 *
 * @summary Calculates the maximum value of a list.
 *
 * @example
 *
 * F.maximum([1, 2, 3]) // 3
 * F.maximum('abc') // 'c'
 *
 * @param as A list.
 * @returns A value.
 */
export default maximumBy(compare)

import compare from './compare'
import minimumBy from './minimumBy'

/**
 * Returns the minimum value in the list of `as`.
 *
 * @summary Calculates the minimum value of a list.
 *
 * @example
 *
 * F.minimum([1, 2, 3]) // 1
 * F.minimum('abc') // 'a'
 *
 * @param as A list.
 * @returns A value.
 */
export default minimumBy(compare)

import compare from './compare'
import minimumBy from './minimumBy'

/**
 * Calculates the minimum value of a list.
 *
 * This a special case of the `minaximumBy` function where the values are
 * compared using natural ordering.
 *
 * @function
 * @param {Array|String} as The list.
 * @returns Returns the minimum value in the list of `as`.
 * @example
 *
 * import { minimum } from 'fkit'
 * minimum([1, 2, 3]) // 1
 * minimum('abc') // 'a'
 */
export default minimumBy(compare)

import compare from './uncurried/compare'
import sortBy from './sortBy'

/**
 * Sorts a list using natural ordering.
 *
 * This a special case of the `sortBy` function where the values are compared
 * using natural ordering.
 *
 * @function
 * @param {Array|String} a The list to sort.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` sorted.
 * @example
 *
 * import { sort } from 'fkit'
 * sort([2, 3, 1]) // [1, 2, 3]
 * sort('bca') // 'abc'
 */
export default sortBy(compare)

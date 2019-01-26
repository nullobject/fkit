import curry from './curry'
import eq from './eq'
import { findIndices } from './findIndices'

/**
 * Gets the indices of all occurances of a value in a list.
 *
 * @param a A value.
 * @param {Array|String} as A list.
 * @returns {Array} The indices of all occurances of the value `a` in the list
 * of `as`.
 * @example
 *
 * import { elemIndices } from 'fkit'
 *
 * elemIndices(0, [1, 2, 3]) // []
 * elemIndices(1, [1, 2, 3]) // [0]
 *
 * elemIndices('a', 'foo') // []
 * elemIndices('o', 'foo') // [1, 2]
 */
export function elemIndices (a, as) {
  return findIndices(eq(a), as)
}

export default curry(elemIndices)

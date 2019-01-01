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
 *
 * @example
 *
 * F.elemIndices(0, [1, 2, 3]) // []
 * F.elemIndices(1, [1, 2, 3]) // [0]
 *
 * F.elemIndices('a', 'foo') // []
 * F.elemIndices('o', 'foo') // [1, 2]
 */
export function elemIndices (a, as) {
  return findIndices(eq(a), as)
}

export default curry(elemIndices)

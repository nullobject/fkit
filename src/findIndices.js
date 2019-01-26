import curry from './curry'

/**
 * Finds the indices of all the values in a list that satisfy a predicate
 * function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array} The indices of the values in the list of `as` that satisfy
 * the predicate function `p`.
 * @example
 *
 * import { eq, findIndices, gt } from 'fkit'
 *
 * findIndices(gt(1), []) // []
 * findIndices(gt(1), [1, 2, 3]) // [1, 2]
 *
 * findIndices(eq('o'), '') // []
 * findIndices(eq('o'), 'foo') // [1, 2]
 */
export function findIndices (p, as) {
  const s = []
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { s.push(i) }
  }

  return s
}

export default curry(findIndices)

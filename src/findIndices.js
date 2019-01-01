import curry from './curry'

/**
 * Finds the indices of all the values in a list that satisfy a predicate
 * function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array} The indices of the values in the list of `as` that satisfy
 * the predicate function `p`.
 *
 * @example
 *
 * F.findIndices(F.gt(1), []) // []
 * F.findIndices(F.gt(1), [1, 2, 3]) // [1, 2]
 *
 * F.findIndices(F.eq('o'), '') // []
 * F.findIndices(F.eq('o'), 'foo') // [1, 2]
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

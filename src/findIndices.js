import curry from './curry'

export function findIndices (p, as) {
  const s = []
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { s.push(i) }
  }

  return s
}

/**
 * Returns the indices of the elements in the list of `as` that satisfy the
 * predicate function `p`.
 *
 * @summary Finds the indices of all occurances of the elements in a list that
 * satisfy a predicate function.
 *
 * @example
 *
 * F.findIndices(F.gt(1), []) // []
 * F.findIndices(F.gt(1), [1, 2, 3]) // [1, 2]
 *
 * F.findIndices(F.eq('o'), '') // []
 * F.findIndices(F.eq('o'), 'foo') // [1, 2]
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export default curry(findIndices)

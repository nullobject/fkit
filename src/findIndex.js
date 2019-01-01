import curry from './curry'

export function findIndex (p, as) {
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { return i }
  }

  return undefined
}

/**
 * Returns the index of the first occurance of an element in the list of `as`
 * that satisfies the predicate function `p`.
 *
 * @summary Finds the index of the first occurance of an element in a list that
 * satisfies a predicate function.
 *
 * @example
 *
 * F.findIndex(F.gt(1), []) // undefined
 * F.findIndex(F.gt(1), [1, 2, 3]) // 1
 *
 * F.findIndex(F.eq('o'), '') // undefined
 * F.findIndex(F.eq('o'), 'foo') // 1
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export default curry(findIndex)

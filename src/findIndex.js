import curry from './curry'

/**
 * Finds the index of the first occurance of a value in a list that satisfies a
 * predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Number} The index of the first occurance of a value in the list of
 * `as` that satisfies the predicate function `p`,  or `undefined` if no value
 * was found.
 * @example
 *
 * import { eq, findIndex, gt } from 'fkit'
 *
 * findIndex(gt(1), []) // undefined
 * findIndex(gt(1), [1, 2, 3]) // 1
 *
 * findIndex(eq('o'), '') // undefined
 * findIndex(eq('o'), 'foo') // 1
 */
export function findIndex (p, as) {
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { return i }
  }

  return undefined
}

export default curry(findIndex)

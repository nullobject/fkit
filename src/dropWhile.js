import curry from './curry'
import isString from './internal/isString'

export function dropWhile (p, as) {
  let s = isString(as) ? '' : []
  const m = as.length
  let n = 0

  while (n < m && p(as[n])) {
    n++
  }

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
}

/**
 * Returns the suffix after dropping elements from the list of `as` while the
 * predicate function `p` is satisfied.
 *
 * @summary Gets the suffix of a list using a predicate function.
 *
 * @example
 *
 * F.dropWhile(F.lt(3), [1, 2, 3]) // [3]
 * F.dropWhile(F.neq(o), 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(dropWhile)

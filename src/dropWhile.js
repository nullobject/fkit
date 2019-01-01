import curry from './curry'
import isString from './internal/isString'

/**
 * Drops elements from the start of a list using a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array|String} The result after dropping elements from the list of
 * `as` while the predicate function `p` is satisfied.
 *
 * @example
 *
 * F.dropWhile(F.lt(3), [1, 2, 3]) // [3]
 * F.dropWhile(F.neq(o), 'foo') // 'oo'
 */
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

export default curry(dropWhile)

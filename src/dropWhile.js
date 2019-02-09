import curry from './curry'
import isString from './internal/isString'

/**
 * Drops elements from the start of a list using a predicate function.
 *
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that drops elements from the list of `as`
 * while the predicate function `p` is satisfied.
 * @example
 *
 * import { dropWhile, lt, neq } from 'fkit'
 * dropWhile(lt(3), [1, 2, 3]) // [3]
 * dropWhile(neq(o), 'foo') // 'oo'
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

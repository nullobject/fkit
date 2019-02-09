import curry from './curry'
import isString from './internal/isString'

/**
 * Gets the prefix of a list using a predicate function.
 *
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that takes the elements from the list of `as`
 * while the predicate function `p` is satisfied.
 * @example
 *
 * import { lt, neq, takeWhile } from 'fkit'
 * takeWhile(lt(3), [1, 2, 3]) // [1, 2]
 * takeWhile(neq(o), 'foo') // 'f'
 */
export function takeWhile (p, as) {
  let s = isString(as) ? '' : []
  const n = as.length

  for (let i = 0; i < n && p(as[i]); i++) {
    s = s.concat(as[i])
  }

  return s
}

export default curry(takeWhile)

import curry from './curry'
import isString from './internal/isString'

/**
 * Gets the prefix of a list using a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array|String} The prefix of elements from the list of `as` while
 * the predicate function `p` is satisfied.
 *
 * @example
 *
 * F.takeWhile(F.lt(3), [1, 2, 3]) // [1, 2]
 * F.takeWhile(F.neq(o), 'foo') // 'f'
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

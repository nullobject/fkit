import curry from './curry'
import isString from './internal/isString'

export function takeWhile (p, as) {
  let s = isString(as) ? '' : []
  const n = as.length

  for (let i = 0; i < n && p(as[i]); i++) {
    s = s.concat(as[i])
  }

  return s
}

/**
 * Returns the prefix of elements from the list of `as` while the predicate
 * function `p` is satisfied.
 *
 * @summary Gets the prefix of a list using a predicate function.
 *
 * @example
 *
 * F.takeWhile(F.lt(3), [1, 2, 3]) // [1, 2]
 * F.takeWhile(F.neq(o), 'foo') // 'f'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(takeWhile)

import curry from './curry'
import mempty from './internal/mempty'
import { any } from './any'
import { append } from './append'
import { fold } from './fold'

/**
 * Calculates the intersection of two lists.
 *
 * The comparator function `f` compares two elements, `a` and `b`. If the
 * elements are considered to be equal, then the comparator function should
 * return `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @param {Function} f A comparator function.
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array|String} A list that contains the intersection of the elments
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { intersectBy } from 'fkit'
 * intersectBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [2, 3]
 * intersectBy((a, b) => a === b, 'hello', 'world') // 'ol'
 */
export function intersectBy (f, as, bs) {
  return fold((cs, a) => {
    return any(b => f(a, b), bs) ? append(a, cs) : cs
  }, mempty(as), as)
}

export default curry(intersectBy)

import any from './any'
import append from './append'
import curry from './curry'
import fold from './fold'
import mempty from './internal/mempty'

export function intersectBy (f, as, bs) {
  return fold((cs, a) => {
    return any(b => f(a, b), bs) ? append(a, cs) : cs
  }, mempty(as), as)
}

/**
 * Returns a list that contains the intersection of the elments in the lists of
 * `as` and `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the intersection of two lists.
 *
 * @example
 *
 * F.intersectBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [2, 3]
 * F.intersectBy((a, b) => a === b, 'hello', 'world') // 'ol'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(intersectBy)

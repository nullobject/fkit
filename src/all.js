import curry from './curry'
import filter from './filter'

/**
 * Returns `true` if all elements in the list of `as` satisfy the predicate
 * function `p`, `false` otherwise.
 *
 * @summary Determines if all elements in a list satisfy a predicate function.
 *
 * @example
 *
 * F.all(F.gt(1), [1, 2, 3]) // false
 * F.all(F.gt(1), [2, 3]) // true
 * F.all(F.gt(1), [3]) // true
 *
 * F.all(F.eq('o'), 'foo') // false
 * F.all(F.eq('o'), 'oo') // true
 * F.all(F.eq('o'), 'o') // true
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A boolean value.
 */
export default curry((p, as) => {
  return filter(p, as).length === as.length
})

import curry from './curry'
import filter from './filter'

/**
 * Returns `true` if any elements in the list of `as` satisfy the predicate
 * function `p`, `false` otherwise.
 *
 * @summary Determines if any elements in a list satisfy a predicate function.
 *
 * @example
 *
 * F.any(F.gt(1), [1, 2, 3]) // true
 * F.any(F.gt(1), [1, 2]) // true
 * F.any(F.gt(1), [1]) // false
 *
 * F.any(F.eq('o'), 'foo') // true
 * F.any(F.eq('o'), 'fo') // true
 * F.any(F.eq('o'), 'f') // false
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A boolean value.
 */
export default curry((p, as) => filter(p, as).length > 0)

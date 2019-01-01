import any from './any'
import curry from './curry'
import isPrefixOf from './isPrefixOf'
import tails from './tails'

/**
 * Returns `true` if the list of `as` is contained within the list of `bs`,
 * `false` otherwise.
 *
 * @summary Determines if a list is contained within another list.
 *
 * @example
 *
 * F.isInfixOf([], [1, 2, 3]) // true
 * F.isInfixOf([2, 3], [1, 2, 3]) // true
 * F.isInfixOf([3, 2], [1, 2, 3]) // false
 *
 * F.isInfixOf('', 'foo') // true
 * F.isInfixOf('oo', 'foo') // true
 * F.isInfixOf('of', 'foo') // false
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export default curry((as, bs) => any(isPrefixOf(as), tails(bs)))

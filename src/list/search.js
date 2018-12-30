import always from '../always'
import any from '../any'
import branch from '../branch'
import compose from '../compose'
import concatMap from '../concatMap'
import curry from '../curry'
import empty from '../empty'
import equal from '../equal'
import filter from '../filter'
import head from '../head'
import id from '../id'
import isPrefixOf from '../isPrefixOf'
import not from '../not'
import reverse from '../reverse'
import tail from '../tail'
import tails from '../tails'

/**
 * This module defines search operations on lists.
 *
 * @private
 * @module fkit/list/search
 */

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
export const isInfixOf = curry((as, bs) => any(isPrefixOf(as), tails(bs)))

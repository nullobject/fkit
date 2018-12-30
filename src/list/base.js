import append from '../append'
import curry from '../curry'
import empty from '../empty'
import head from '../head'
import isArray from '../internal/isArray'
import isArrayOfStrings from '../internal/isArrayOfStrings'
import isString from '../internal/isString'
import mempty from '../internal/mempty'
import prepend from '../prepend'
import tail from '../tail'

/**
 * This module defines basic operations on lists.
 *
 * @private
 * @module fkit/list/base
 */

/**
 * Returns a list that contains all final segments of the list of `as`.
 *
 * @summary Gets all final segments of a list.
 *
 * @example
 *
 * F.tails([1, 2, 3]) // [[1, 2, 3], [2, 3], [3], []]
 * F.tails('foo') // ['foo', 'oo', 'o', '']
 *
 * @param as A list.
 * @returns A new list.
 */
export function tails (as) {
  return prepend(as, empty(as) ? [] : tails(tail(as)))
}

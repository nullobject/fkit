import curry from '../curry'
import isArray from '../internal/isArray'
import isArrayOfStrings from '../internal/isArrayOfStrings'
import isString from '../internal/isString'
import mempty from '../internal/mempty'

/**
 * This module defines basic operations on lists.
 *
 * @private
 * @module fkit/list/base
 */

/**
 * Returns the number of elements in the list of `as`.
 *
 * @summary Gets the length of a list.
 *
 * @example
 *
 * F.length([1, 2, 3]) // 3
 * F.length('foo') // 3
 *
 * @param as A list.
 * @returns A number.
 */
export function length (as) { return as.length }

/**
 * Returns `true` if the list of `as` is empty, `false` otherwise.
 *
 * @summary Determines if a list is empty.
 *
 * @example
 *
 * F.empty([]) // true
 * F.empty([1, 2, 3]) // false
 *
 * F.empty('') // true
 * F.empty('foo') // false
 *
 * @param as A list.
 * @returns A boolean value.
 */
export function empty (as) { return as.length === 0 }

/**
 * Returns a list that contains the value `a` appended to the list of `bs`.
 *
 * @summary Appends a value to a list.
 *
 * @example
 *
 * F.append(3, [1, 2]) // [1, 2, 3]
 * F.append('o', 'fo') // 'foo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export const append = curry((a, bs) => isString(bs) ? (bs + a) : bs.concat([a]))

/**
 * Returns a list that contains the value `a` prepended to the list of `bs`.
 *
 * @summary Prepends a value to a list.
 *
 * @example
 *
 * F.prepend(1, [2, 3]) // [1, 2, 3]
 * F.prepend('f', 'oo') // 'foo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export const prepend = curry((a, bs) => isString(bs) ? (a + bs) : [a].concat(bs))

/**
 * Surrounds the list of `cs` with the values `a` and `b`.
 *
 * @example
 *
 * F.surround(0, 4, [1, 2, 3]) // [0, 1, 2, 3, 4]
 * F.surround('(', ')', 'foo') // '(foo)'
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @param cs A list.
 * @returns A new list.
 */
export const surround = curry((a, b, cs) => append(b, prepend(a, cs)))

/**
 * Returns the first element in the list of `as`.
 *
 * @summary Gets the first element in a list.
 *
 * @example
 *
 * F.head([1, 2, 3]) // 1
 * F.head('foo') // 'f'
 *
 * @param as A list.
 * @returns A value or `undefined` if the list is empty.
 */
export function head (as) { return as[0] }

/**
 * Returns the last element in the list of `as`.
 *
 * @summary Gets the last element in a list.
 *
 * @example
 *
 * F.last([1, 2, 3]) // 3
 * F.last('foo') // 'o'
 *
 * @param as A list.
 * @returns A value or `undefined` if the list is empty.
 */
export function last (as) { return as[as.length - 1] }

/**
 * Returns a list that contains the elements before the last element in the
 * list of `as`.
 *
 * @summary Gets the elements before the last element in a list.
 *
 * @example
 *
 * F.init([1, 2, 3]) // [1, 2]
 * F.init('foo') // 'fo'
 *
 * @param as A list.
 * @returns A new list.
 */
export function init (as) { return as.slice(0, as.length - 1) }

/**
 * Returns a list that contains the elements after the first element in the
 * list of `as`.
 *
 * @summary Get the elements after the first element in a list.
 *
 * @example
 *
 * F.tail([1, 2, 3]) // [2, 3]
 * F.tail('foo') // 'oo'
 *
 * @param as A list.
 * @returns A new list.
 */
export function tail (as) { return as.slice(1) }

/**
 * Returns a list that contains all initial segments of the list of `as`.
 *
 * @summary Gets all initial segments of a list.
 *
 * @example
 *
 * F.inits([1, 2, 3]) // [[], [1], [1, 2], [1, 2, 3]]
 * F.inits('foo') // ['', 'f', 'fo', 'foo']
 *
 * @param as A list.
 * @returns A new list.
 */
export function inits (as) {
  return prepend(mempty(as), empty(as) ? [] : inits(tail(as)).map(prepend(head(as))))
}

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

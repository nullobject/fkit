import add from '../add'
import append from '../append'
import compare from '../compare'
import compose from '../compose'
import curry from '../curry'
import flip from '../flip'
import fold from '../fold'
import foldRight from '../foldRight'
import isArray from '../internal/isArray'
import isArrayOfStrings from '../internal/isArrayOfStrings'
import mempty from '../internal/mempty'
import mul from '../mul'
import tap from '../tap'
import toArray from '../internal/toArray'
import variadic from '../variadic'

/**
 * This module defines fold operations on lists.
 *
 * @private
 * @module fkit/list/fold
 */

/**
 * Returns a list that contains the elements in the list of `as` scanned
 * right-to-left with the binary function `f` and starting value `s`.
 *
 * @summary Scans a list from right to left with a function.
 *
 * @example
 *
 * F.scanRight(F.append, [],  [1, 2, 3]) // [[3, 2, 1], [3, 2], [3], []]
 * F.scanRight(F.append, '',  'foo') // ['oof', 'oo', 'o', '']
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A new list.
 */
export const scanRight = curry((f, s, as) => {
  const r = [s]
  foldRight((a, b) => tap(r.unshift.bind(r), f(a, b)), s, as)
  return r
})

/**
 * Returns the maximum value in the list of `as` using the comparator function
 * `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @summary Calculates the maximum value of a list using a comparator function.
 *
 * @example
 *
 * F.maximumBy(F.compare, [1, 2, 3]) // 3
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A value.
 */
export const maximumBy = curry((f, as) =>
  fold((a, b) => f(a, b) > 0 ? a : b, as[0], as)
)

/**
 * Returns the maximum value in the list of `as`.
 *
 * @summary Calculates the maximum value of a list.
 *
 * @example
 *
 * F.maximum([1, 2, 3]) // 3
 * F.maximum('abc') // 'c'
 *
 * @param as A list.
 * @returns A value.
 */
export const maximum = maximumBy(compare)

/**
 * Returns the minimum value in the list of `as` using the comparator function
 * `f`.
 *
 * @summary Calculates the minimum value of a list using a comparator
 * function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal, then the comparator function should return `0`.
 *
 * @example
 *
 * F.minimumBy(F.compare, [1, 2, 3]) // 1
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A value.
 */
export const minimumBy = curry((f, as) =>
  fold((a, b) => f(a, b) < 0 ? a : b, as[0], as)
)

/**
 * Returns the minimum value in the list of `as`.
 *
 * @summary Calculates the minimum value of a list.
 *
 * @example
 *
 * F.minimum([1, 2, 3]) // 1
 * F.minimum('abc') // 'a'
 *
 * @param as A list.
 * @returns A value.
 */
export const minimum = minimumBy(compare)

/**
 * Returns the sum of the elements in the list of `as`.
 *
 * @summary Calculates the sum of the elements in a list.
 *
 * @example
 *
 * F.sum([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export function sum (as) { return fold(add, 0, as) }

/**
 * Returns the product of the elements in the list of `as`.
 *
 * @summary Calculates the product of the elements in a list.
 *
 * @example
 *
 * F.product([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export function product (as) { return fold(mul, 1, as) }

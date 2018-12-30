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
import maximumBy from '../maximumBy'
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

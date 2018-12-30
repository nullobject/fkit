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

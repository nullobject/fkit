import apply from './apply'
import apply2 from './apply2'
import curry from './curry'
import variadic from './variadic'

/**
 * This module defines basic operations on functions.
 *
 * @module fkit/fn
 * @summary Core Functions
 */

/**
 * Returns `true` if the value `a` is strictly equal (`===`) to the value `b`,
 * false otherwise.
 *
 * @summary The strict equality operator.
 *
 * @example
 *
 * F.equal(1, 1) // true
 * F.equal(1, 2) // false
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export const equal = curry((a, b) => b === a)

/**
 * Returns `true` if the value `a` is strictly not equal (`!==`) to the value
 * `b`, false otherwise.
 *
 * @summary The strict inequality operator.
 *
 * F.notEqual(1, 1) // false
 * F.notEqual(1, 2) // true
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export const notEqual = curry((a, b) => b !== a)

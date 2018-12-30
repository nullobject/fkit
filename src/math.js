import curry from './curry'
import equal from './equal'
import notEqual from './notEqual'

/**
 * This module defines math functions.
 *
 * @module fkit/math
 * @summary Yay, Numbers!
 */

/**
 * Returns `true` if the value `a` is less than or equal to the value `b`,
 * false otherwise.
 *
 * @summary The less than or equal operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A boolean value.
 */
export const lte = curry((a, b) => b <= a)

/**
 * Returns `true` if the value `a` is even, false otherwise.
 *
 * @summary Tests whether a value is even.
 *
 * @param a A number.
 * @returns A boolean value.
 */
export function even (a) { return !(a % 2) }

/**
 * Returns `true` if the value `a` is odd, false otherwise.
 *
 * @summary Tests whether a value is odd.
 *
 * @param a A number.
 * @returns A boolean value.
 */
export function odd (a) { return !!(a % 2) }

/**
 * Returns the result of `a + 1`.
 *
 * @summary Increments a number.
 *
 * @param a A number.
 * @returns A number.
 */
export function inc (a) { return a + 1 }

/**
 * Returns the result of `a - 1`.
 *
 * @summary Decrements a number.
 *
 * @param a A number.
 * @returns A number.
 */
export function dec (a) { return a - 1 }

/**
 * Returns a random integer between `a` and `b`.
 *
 * @summary Generates a random integer.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export const randomInt = curry((a, b) => Math.floor(Math.random() * (b - a + 1)) + a)

/**
 * Returns a random float between `a` and `b`.
 *
 * @summary Generates a random float.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export const randomFloat = curry((a, b) => (Math.random() * (b - a)) + a)

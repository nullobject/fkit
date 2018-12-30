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

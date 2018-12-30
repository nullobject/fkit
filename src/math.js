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

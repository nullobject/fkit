import { applyRight, curry } from './fn'

/**
 * This module defines logic functions.
 *
 * @module fkit/logic
 * @summary Logical Functions and Combinators
 */

/**
 * Returns true if both `a` and `b` are truthy, false otherwise.
 *
 * @summary The logical AND operator.
 *
 * @example
 *
 * F.and(true, true) // true
 * F.and(0, 1) // false
 * F.and('', 'foo') // false
 *
 * @curried
 * @function
 * @param a A boolean value.
 * @param b A boolean value.
 * @returns A boolean value.
 */
export const and = curry((a, b) => !!(b && a))

/**
 * Returns true if either `a` or `b` are truthy, false otherwise.
 *
 * @summary The logical OR operator.
 *
 * @example
 *
 * F.or(false, true) // true
 * F.or(0, 1) // true
 * F.or('', 'foo') // true
 *
 * @curried
 * @function
 * @param a A boolean value.
 * @param b A boolean value.
 * @returns A boolean value.
 */
export const or = curry((a, b) => !!(b || a))

/**
 * Returns true if `a` is not truthy, false otherwise.
 *
 * @summary The logical NOT operator.
 *
 * @example
 *
 * F.not(true) // false
 * F.not(false) // true
 *
 * @param a A boolean.
 * @returns A boolean value.
 */
export function not (a) { return !a }

/**
 * If `p(a)` is true then `f` is applied to `a`, otherwise `g` is applied to
 * `a`.
 *
 * @summary Branches execution based on a predicate function.
 *
 * @example
 *
 * function big (a) { return a + ' is a big number' }
 * function small (a) { return a + ' is a small number' }
 * var f = F.branch(F.gt(10), big, small)
 * f(10) // small number
 * f(11) // big number
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param f A function.
 * @param g A function.
 * @param a A value.
 * @returns A value.
 */
export const branch = curry((p, f, g, a) => p(a) ? f(a) : g(a))

/**
 * Applies the list of predicate functions `ps` to the value `a` and returns
 * their conjunction.
 *
 * @example
 *
 * var ps = [F.gt(1), F.gt(2)]
 * F.whereAll(ps, 1) // false
 * F.whereAll(ps, 2) // false
 * F.whereAll(ps, 3) // true
 *
 * @curried
 * @function
 * @param ps A list of predicate functions.
 * @param a A value.
 * @returns A boolean value.
 */
export const whereAll = curry((ps, a) => ps.map(applyRight(a)).reduce(and, true))

/**
 * Applies the list of predicate functions `ps` to the value `a` and returns
 * their disjunction.
 *
 * @example
 *
 * var ps = [F.gt(1), F.gt(2)]
 * F.whereAny(ps, 1) // false
 * F.whereAny(ps, 2) // true
 * F.whereAny(ps, 3) // true
 *
 * @curried
 * @function
 * @param ps A list of predicate functions.
 * @param a A value.
 * @returns A boolean value.
 */
export const whereAny = curry((ps, a) => ps.map(applyRight(a)).reduce(or, false))

import and from './and'
import applyRight from './applyRight'
import curry from './curry'
import or from './or'

/**
 * This module defines logic functions.
 *
 * @module fkit/logic
 * @summary Logical Functions and Combinators
 */

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

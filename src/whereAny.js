import curry from './curry'
import whereAny from './uncurried/whereAny'

/**
 * Determines whether any predicate functions in a list are satisfied when they
 * are applied to a value.
 *
 * @function
 * @param {Array} ps The list of predicate functions.
 * @param a The value.
 * @returns {Boolean} `true` if any predicate function in the list of `ps` are
 * satisfied when applied to the value `a`, `false` otherwise.
 * @example
 *
 * import { gt, whereAny } from 'fkit'
 * const ps = [gt(1), gt(2)]
 * whereAny(ps, 1) // false
 * whereAny(ps, 2) // true
 * whereAny(ps, 3) // true
 */
export default curry(whereAny)

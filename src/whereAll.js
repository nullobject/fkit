import curry from './curry'
import whereAll from './uncurried/whereAll'

/**
 * Determines whether all predicate functions in a list are satisfied they are
 * applied to a value.
 *
 * @function
 * @param {Array} ps The list of predicate functions.
 * @param a The value.
 * @returns {Boolean} `true` if all predicate functions in the list of `ps` are
 * satisfied when applied to the value `a`, `false` otherwise.
 * @example
 *
 * import { gt, whereAll } from 'fkit'
 * const ps = [gt(1), gt(2)]
 * whereAll(ps, 1) // false
 * whereAll(ps, 2) // false
 * whereAll(ps, 3) // true
 */
export default curry(whereAll)

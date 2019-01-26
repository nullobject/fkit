import applyRight from './applyRight'
import curry from './curry'
import or from './or'

/**
 * Determines whether any predicate functions in a list are satisfied when a
 * value is applied.
 *
 * @param {Array} ps A list of predicate functions.
 * @param a A value.
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
export function whereAny (ps, a) {
  return ps.map(applyRight(a)).reduce(or, false)
}

export default curry(whereAny)

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
 *
 * @example
 *
 * var ps = [F.gt(1), F.gt(2)]
 * F.whereAny(ps, 1) // false
 * F.whereAny(ps, 2) // true
 * F.whereAny(ps, 3) // true
 */
export function whereAny (ps, a) {
  return ps.map(applyRight(a)).reduce(or, false)
}

export default curry(whereAny)

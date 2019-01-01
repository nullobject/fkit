import and from './and'
import applyRight from './applyRight'
import curry from './curry'

/**
 * Determines whether all predicate functions in a list are satisfied when a
 * value is applied.
 *
 * @param {Array} ps A list of predicate functions.
 * @param a A value.
 * @returns {Boolean} `true` if all predicate functions in the list of `ps` are
 * satisfied when applied to the value `a`, `false` otherwise.
 *
 * @example
 *
 * var ps = [F.gt(1), F.gt(2)]
 * F.whereAll(ps, 1) // false
 * F.whereAll(ps, 2) // false
 * F.whereAll(ps, 3) // true
 */
export function whereAll (ps, a) {
  return ps.map(applyRight(a)).reduce(and, true)
}

export default curry(whereAll)

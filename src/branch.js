import curry from './curry'

/**
 * Branches execution based on a predicate function.
 *
 * If `p(a)` is true then `f` is applied to `a`, otherwise `g` is
 * applied to `a`.
 *
 * @param {Function} p A predicate function.
 * @param {Function} f A function.
 * @param {Function} g A function.
 * @param a The value to apply to the predicate function `p`.
 * @returns The result.
 * @example
 *
 * import { branch, gt } from 'fkit'
 * const big = a => a + ' is a big number'
 * const small = a => a + ' is a small number'
 * const f = branch(gt(10), big, small)
 * f(10) // small number
 * f(11) // big number
 */
export function branch (p, f, g, a) {
  return p(a) ? f(a) : g(a)
}

export default curry(branch)

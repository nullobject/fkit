import curry from './curry'

/**
 * Applies the function `f` to the value `a` and returns the value `a`
 * unchanged.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @returns The value `a`.
 *
 * @example
 *
 * function f (a) { console.log(a) }
 * F.tap(f)(1) // 1
 */
export function tap (f, a) {
  f(a)
  return a
}

export default curry(tap)

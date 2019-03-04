import curry from './curry'
import tap from './uncurried/tap'

/**
 * Applies the function `f` to the value `a` and returns the value `a`
 * unchanged.
 *
 * @function
 * @param {Function} f The function to apply.
 * @param a The value.
 * @returns The value `a` unchanged.
 * @example
 *
 * import { tap } from 'fkit'
 * const f = a => console.log(a)
 * tap(f)(1) // 1
 */
export default curry(tap)

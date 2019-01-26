import curry from './curry'

/**
 * Applies a function to a value. This is similar to `apply`, however the order
 * of the arguments is flipped.
 *
 * @param a A value.
 * @param {Function} f A function.
 * @returns The result of `f(a)`.
 * @example
 *
 * import { applyRight } from 'fkit'
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * applyRight('Jane', sayHi) // Hi Jane!
 */
export function applyRight (a, f) {
  return f(a)
}

export default curry(applyRight)

import curry from './curry'

/**
 * Applies a function to a value. This is similar to `apply`, however the
 * order of the arguments is flipped.
 *
 * @param a A value.
 * @param {Function} f A function.
 * @returns The result of `f(a)`.
 *
 * @example
 *
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * F.applyRight('Jane', sayHi) // Hi Jane!
 */
export function applyRight (a, f) {
  return f(a)
}

export default curry(applyRight)

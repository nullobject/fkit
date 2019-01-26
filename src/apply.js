import curry from './curry'

/**
 * Applies a function to a value.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @returns The result of `f(a)`.
 * @example
 *
 * import { apply } from 'fkit'
 * const sayHi = a => ['Hi', a, '!'].join(' ')
 * apply(sayHi, 'jane') // Hi Jane!
 */
export function apply (f, a) {
  return f(a)
}

export default curry(apply)

import curry from './curry'

/**
 * Applies a function to a value.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @returns The result of `f(a)`.
 *
 * @example
 *
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * f.apply(sayHi, 'jane') // Hi Jane!
 */
export function apply (f, a) {
  return f(a)
}

export default curry(apply)

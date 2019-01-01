import curry from './curry'

export function apply (f, a) {
  return f(a)
}

/**
 * Returns the result of the function `f` applied to the value `a`.
 *
 * @summary Applies a function to a value.
 *
 * @example
 *
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * f.apply(sayHi, 'jane') // Hi Jane!
 *
 * @curried
 * @function
 * @param f A function.
 * @param a A value.
 * @returns The result of `f(a)`.
 */
export default curry(apply)

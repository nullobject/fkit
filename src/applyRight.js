import curry from './curry'

/**
 * Returns the result of the function `f` applied to the value `a`.
 *
 * This is similar to `apply`, however the order of the arguments is flipped.
 *
 * @summary Applies a function to a value.
 *
 * @example
 *
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * F.applyRight('Jane', sayHi) // Hi Jane!
 *
 * @curried
 * @function
 * @param a A value.
 * @param f A function.
 * @returns The result of `f(a)`.
 */
export default curry((a, f) => f(a))

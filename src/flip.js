import curry from './curry'

/**
 * Returns the result of applying the function `f` to the values `b` and `a`.
 *
 * @summary Flips the order of the arguments to a function.
 *
 * @example
 *
 * function f (a, b) { ... }
 * var g = F.flip(f)
 * g(1, 2) // f(2, 1)
 *
 * @function
 * @param f A function.
 * @param a A value.
 * @param b A value.
 * @returns A new function.
 */
export default curry((f, a, b) => f(b, a))

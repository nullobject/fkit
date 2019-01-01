import curry from './curry'

/**
 * returns the result of the function `f` applied to the value `a`.
 *
 * @summary applies a function to a value.
 *
 * @example
 *
 * function sayhi (a) { return ['hi', a, '!'].join(' ') }
 * f.apply(sayhi, 'jane') // hi jane!
 *
 * @curried
 * @function
 * @param f a function.
 * @param a a value.
 * @returns the result of `f(a)`.
 */
export default curry((f, a) => f(a))

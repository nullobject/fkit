import apply from './apply'
import apply2 from './apply2'
import curry from './curry'
import variadic from './variadic'

/**
 * This module defines basic operations on functions.
 *
 * @module fkit/fn
 * @summary Core Functions
 */

/**
 * Returns a function that wraps the function `f` to accept only one argument.
 * Any other arguments will be ignored.
 *
 * @summary Converts a function to a unary function.
 *
 * @example
 *
 * function f () { ... }
 * const g = F.unary(f)
 * g(1, 2, 3) // f(1)
 *
 * @param f A function.
 * @returns A new function.
 */
export function unary (f) {
  return (f.length === 1) ? f : apply(f)
}

/**
 * Returns a function that wraps the function `f` to accept only two arguments.
 * Any other arguments will be ignored.
 *
 * @summary Converts a function to a binary function.
 *
 * @example
 *
 * function f () { ... }
 * const g = F.binary(f)
 * g(1, 2, 3) // f(1, 2)
 *
 * @param f A function.
 * @returns A new function.
 */
export function binary (f) {
  return (f.length === 2) ? f : apply2(f)
}

/**
 * Applies the function `f` to the value `a` and returns the value `a`
 * unchanged.
 *
 * @summary Applies a side-effecting function to a value.
 *
 * @example
 *
 * function f (a) { console.log(a) }
 * F.tap(f)(1) // 1
 *
 * @curried
 * @function
 * @param f A function.
 * @param a A value.
 * @returns The value `a`.
 */
export const tap = curry((f, a) => {
  f(a)
  return a
})

/**
 * Returns `true` if the value `a` is strictly equal (`===`) to the value `b`,
 * false otherwise.
 *
 * @summary The strict equality operator.
 *
 * @example
 *
 * F.equal(1, 1) // true
 * F.equal(1, 2) // false
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export const equal = curry((a, b) => b === a)

/**
 * Returns `true` if the value `a` is strictly not equal (`!==`) to the value
 * `b`, false otherwise.
 *
 * @summary The strict inequality operator.
 *
 * F.notEqual(1, 1) // false
 * F.notEqual(1, 2) // true
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export const notEqual = curry((a, b) => b !== a)

/**
 * Returns the ordering of the two values `a` and `b`.
 *
 * @summary Compares two values using natural ordering.
 *
 * @example
 *
 * F.compare(1, 2) // -1
 * F.compare(2, 1) // 1
 * F.compare(2, 2) // 0
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A number.
 */
export const compare = curry((a, b) => {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
})

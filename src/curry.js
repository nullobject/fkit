/**
 * Curries the given function `f`.
 *
 * Currying turns a function that takes multiple arguments into a function that
 * can be applied to one or more values to give a partially applied function.
 *
 * @param {Function} f The function to curry.
 * @returns {Function} A curried function.
 * @example
 *
 * import { curry } from 'fkit'
 * const add = curry((a, b) => a + b)
 * const add2 = add(2)
 * add2(1) // 3
 */
export default function curry (f) {
  const arity = f.length

  const g = oldArgs => {
    return (...args) => {
      const newArgs = oldArgs.concat((args.length > 0) ? args : undefined)

      // If we have enough args, then apply the function.
      return (newArgs.length >= arity) ? f.apply(undefined, newArgs) : g(newArgs)
    }
  }

  return (arity <= 1) ? f : g([])
}

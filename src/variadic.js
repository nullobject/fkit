import flatten from './internal/flatten'
import { slice } from './util'

/**
 * Converts a function to a variadic function.
 *
 * The last named parameter will be given an array of arguments.
 *
 * @param {Function} f A function.
 * @returns {Function} A function that wraps the function `f` to accept any
 * number of arguments.
 * @example
 *
 * import { variadic } from 'fkit'
 * function f (head, tail) { ... }
 * variadic(f)(1, 2, 3) // f(1, [2, 3])
 */
export default function variadic (f) {
  const arity = f.length

  if (arity < 1) {
    return f
  } else if (arity === 1) {
    return (...args) => {
      const newArgs = (args.length === 1) ? flatten(args) : args

      return f.call(this, newArgs)
    }
  } else {
    return (...args) => {
      const numMissingArgs = Math.max(arity - args.length - 1, 0)
      const missingArgs = new Array(numMissingArgs)
      const namedArgs = slice.call(args, 0, arity - 1)
      const variadicArgs = slice.call(args, f.length - 1)

      return f.apply(this, namedArgs.concat(missingArgs).concat([variadicArgs]))
    }
  }
}

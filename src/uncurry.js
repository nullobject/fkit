import curry from './curry'

export function uncurry (f, p) {
  return f(p[0], p[1])
}

/**
 * Returns a function that wraps the binary function `f` to accept a pair.
 *
 * @summary Converts a binary function to a function on pairs.
 *
 * @example
 *
 * var add = F.uncurry((a, b) => a + b)
 * add([1, 2]) // 3
 *
 * @function
 * @param f A function.
 * @returns A new function.
 */
export default curry(uncurry)

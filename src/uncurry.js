import curry from './curry'

/**
 * Converts a binary function to a function on pairs.
 *
 * @param {Function} f A function.
 * @returns {Function} A function that wraps the binary function `f` to accept
 * a pair.
 *
 * @example
 *
 * var add = F.uncurry((a, b) => a + b)
 * add([1, 2]) // 3
 */
export function uncurry (f, p) {
  return f(p[0], p[1])
}

export default curry(uncurry)

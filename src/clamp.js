import curry from './curry'
import { max } from './max'
import { min } from './min'

/**
 * Clamps a number between two values.
 *
 * @param {Number} a A number.
 * @param {Number} b A number.
 * @param {Number} n A number.
 * @returns {Number} The result of clamping the number `n` between the numbers
 * `a` and `b` (i.e. `a <= n <= b`).
 */
export function clamp (a, b, n) {
  return max(a, min(n, b))
}

export default curry(clamp)

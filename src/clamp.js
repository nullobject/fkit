import curry from './curry'
import { max } from './max'
import { min } from './min'

/**
 * Clamps a number between two values.
 *
 * @param {Number} a The minimum number.
 * @param {Number} b The maximum number.
 * @param {Number} n The number to clamp.
 * @returns {Number} The result of clamping the number `n` between the numbers
 * `a` and `b` (i.e. `a <= n <= b`).
 * @example
 *
 * import { clamp } from 'fkit'
 * clamp(1, 3, 0) // 1
 * clamp(1, 3, 2) // 2
 * clamp(1, 3, 4) // 3
 */
export function clamp (a, b, n) {
  return max(a, min(n, b))
}

export default curry(clamp)

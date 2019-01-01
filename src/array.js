/**
 * Returns an array of length `n`.
 *
 * @summary Creates a new array.
 *
 * @example
 *
 * F.array(3) // [undefined, undefined, undefined]
 *
 * @param n A number.
 * @returns A new array.
 */
export default function array (n) { return Array.apply(null, Array(n)) }

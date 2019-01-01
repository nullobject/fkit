/**
 * Returns a function that always returns the value `c`, regardless of the
 * arguments.
 *
 * @summary The constant function.
 *
 * @example
 *
 * F.always(1)(2, 3) // 1
 *
 * @param c A value.
 * @returns A new function.
 */
export default function always (a) { return () => a }

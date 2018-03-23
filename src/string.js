import {curry} from './fn'

/**
 * This module defines string functions.
 *
 * @module fkit/string
 * @summary Strings
 */

/**
 * @summary Converts a string to uppercase.
 *
 * @param s A string.
 * @returns A new string.
 */
export function toUpper (s) { return s.toUpperCase() }

/**
 * @summary Converts a string to lowercase.
 *
 * @param s A string.
 * @returns A new string.
 */
export function toLower (s) { return s.toLowerCase() }

/**
 * Returns the result of replacing term `a` with the string `b` in the string
 * `s`.
 *
 * @summary Replaces a term in a string.
 *
 * @example
 *
 * F.replace('r', 'z', 'bar') // baz
 * F.replace(/$hello/, 'goodbye', 'hello world!') // goodbye world!
 *
 * @curried
 * @function
 * @param a A string or a regexp.
 * @param b A string.
 * @param s A string.
 * @returns A new string.
 */
export const replace = curry((a, b, s) => s.replace(a, b))

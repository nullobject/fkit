import curry from './curry'

/**
 * Replaces a term in a string.
 *
 * @param {String|RegExp} a The term to find.
 * @param {String} b The string to replace with.
 * @param {String} s The string to perform the find and replace on.
 * @returns {String} The result of replacing term `a` with the string `b` in
 * the string `s`.
 * @example
 *
 * import { replace } from 'fkit'
 * replace('r', 'z', 'bar') // baz
 * replace(/^hello/, 'goodbye', 'hello world!') // goodbye world!
 */
export function replace (a, b, s) {
  return s.replace(a, b)
}

export default curry(replace)

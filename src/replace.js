import curry from './curry'

/**
 * Replaces a term in a string.
 *
 * @param {String|RegExp} a A string or regular expression.
 * @param {String} b A string.
 * @param {String} s A string.
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

import curry from './curry'
import match from './uncurried/match'

/**
 * Determines whether a given regular expression matches a string.
 *
 * @function
 * @param {RegExp} r The regular expression.
 * @param {String} s The string.
 * @returns {Boolean} `true` if the regular expression `r` matches the string
 * `s`, false otherwise.
 * @example
 *
 * import { match } from 'fkit'
 * match(/^f.*$/, 'foo') // true
 * match(/^f.*$/, 'bar') // false
 */
export default curry(match)

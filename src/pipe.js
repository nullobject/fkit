import variadic from './variadic'

/**
 * Composes the given functions from left-to-right.
 *
 * @function
 * @param {Array} fs The functions to compose.
 * @returns {Function} A function that is the composition of the list of
 * functions `fs`.
 * @example
 *
 * import { compose } from 'fkit'
 * pipe(f, g, h)(a) // h(g(f(a)))
 */
export default variadic(fs => a => fs.reduce((a, f) => f(a), a))

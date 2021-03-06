import variadic from './variadic'

/**
 * Composes the given functions from right-to-left.
 *
 * @function
 * @param {Array} fs The functions to compose.
 * @returns {Function} A function that is the composition of the list of
 * functions `fs`.
 * @example
 *
 * import { compose } from 'fkit'
 * compose(f, g, h)(a) // f(g(h(a)))
 */
export default variadic(fs => a => fs.reduceRight((a, f) => f(a), a))

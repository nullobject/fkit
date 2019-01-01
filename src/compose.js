import variadic from './variadic'

/**
 * Composes a list of functions.
 *
 * @function
 * @param {Array} fs A list of functions.
 * @returns {Function} A function that is the composition of the list of
 * functions `fs`.
 *
 * @example
 *
 * F.compose(f, g, h)(a) // f(g(h(a)))
 */
export default variadic(fs => a => fs.reduceRight((a, f) => f(a), a))

import variadic from './variadic'

/**
 * Returns a function that is the composition of the list of functions `fs`.
 *
 * @summary Composes a list of functions.
 *
 * @example
 *
 * F.compose(f, g, h)(a) // f(g(h(a)))
 *
 * @function
 * @param fs A list of functions.
 * @returns A new function.
 */
export default variadic(fs => a => fs.reduceRight((a, f) => f(a), a))

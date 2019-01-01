import curry from './curry'

/**
 * If `p(a)` is true then `f` is applied to `a`, otherwise `g` is applied to
 * `a`.
 *
 * @summary Branches execution based on a predicate function.
 *
 * @example
 *
 * function big (a) { return a + ' is a big number' }
 * function small (a) { return a + ' is a small number' }
 * var f = F.branch(F.gt(10), big, small)
 * f(10) // small number
 * f(11) // big number
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param f A function.
 * @param g A function.
 * @param a A value.
 * @returns A value.
 */
export default curry((p, f, g, a) => p(a) ? f(a) : g(a))

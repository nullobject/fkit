import curry from './curry'

/**
 * Applies the function `f` to the value `a` and returns the value `a`
 * unchanged.
 *
 * @summary Applies a side-effecting function to a value.
 *
 * @example
 *
 * function f (a) { console.log(a) }
 * F.tap(f)(1) // 1
 *
 * @curried
 * @function
 * @param f A function.
 * @param a A value.
 * @returns The value `a`.
 */
export default curry((f, a) => {
  f(a)
  return a
})

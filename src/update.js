import curry from './curry'
import get from './get'
import set from './set'

/**
 * Returns a copy of the object `o` with the property `k` updated with the
 * function `f`.
 *
 * @summary Updates a property of an object with a function.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.update('age', F.inc, person) // { name: 'Jane', age: 21, city: 'Melbourne' }
 *
 * @curried
 * @function
 * @param k A string.
 * @param f A function.
 * @param o An object.
 * @returns A new object.
 */
export default curry((k, f, o) => set(k, f(get(k, o)), o))

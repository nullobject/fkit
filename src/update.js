import curry from './curry'
import { get } from './get'
import { set } from './set'

/**
 * Updates a property of an object with a function.
 *
 * @param {String} k A string.
 * @param {Function} f A function.
 * @param {Object} o An object.
 * @returns {Object} A copy of the object `o` with the property `k` updated
 * with the function `f`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.update('age', F.inc, person) // { name: 'Jane', age: 21, city: 'Melbourne' }
 */
export function update (k, f, o) {
  return set(k, f(get(k, o)), o)
}

export default curry(update)

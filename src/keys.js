/**
 * Gets the keys of an object.
 *
 * @param {Object} o The object.
 * @returns {Array} A list of keys for the properties of the object `o`.
 * @example
 *
 * import { keys } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * keys(person) // ['name', 'age', 'city']
 */
export default function keys (o) {
  return Object.keys(o)
}

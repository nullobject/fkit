/**
 * Gets the values of an object.
 *
 * @param {Object} o The object.
 * @returns {Array} A list of values for the properties of the object `o`.
 * @example
 *
 * import { values } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * values(person) // ['Jane', 20, 'Melbourne']
 */
export default function values (o) {
  return Object.values(o)
}

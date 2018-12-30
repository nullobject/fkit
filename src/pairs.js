import get from './get'
import keys from './keys'

/**
 * Returns a list of key-value pairs for the properties of the object `o`.
 *
 * @summary Gets the key-value pairs of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.pairs(person) // [['name', 'Jane'], ['age', 20], ['city', 'Melbourne']]
 *
 * @param o An object.
 * @returns A new list.
 */
export default function pairs (o) {
  return keys(o).map(k => [k, get(k, o)])
}

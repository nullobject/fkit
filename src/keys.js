/**
 * Returns a list of keys for the properties of the object `o`.
 *
 * @summary Gets the keys of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.keys(person) // ['name', 'age', 'city']
 *
 * @param o An object.
 * @returns A new list.
 */
export default function keys (o) {
  return Object.keys(o)
}

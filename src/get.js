import curry from './curry'

/**
 * Returns the property at the key `k` in the object `o`.
 *
 * @summary Gets a property of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.get('name', person) // 'Jane'
 *
 * @curried
 * @function
 * @param k A string.
 * @param o An object.
 * @returns A value.
 */
export default curry((k, o) => o[k])

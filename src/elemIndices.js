import curry from './curry'
import equal from './equal'
import findIndices from './findIndices'

/**
 * Returns the indices of all occurances of the element `a` in the list of
 * `as`.
 *
 * @summary Gets the indices of all occurances of an element in a list.
 *
 * @example
 *
 * F.elemIndices(0, [1, 2, 3]) // []
 * F.elemIndices(1, [1, 2, 3]) // [0]
 *
 * F.elemIndices('a', 'foo') // []
 * F.elemIndices('o', 'foo') // [1, 2]
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export default curry((a, as) => findIndices(equal(a), as))

import curry from './curry'

/**
 * Gets the index of the first occurance of a value in a list.
 *
 * @param a A value.
 * @param {Array|String} as A list.
 * @returns {Number} The index of the first occurance of the value `a` in the
 * list of `as`, or `undefined` if no value was found.
 *
 * @example
 *
 * F.elemIndex(0, [1, 2, 3]) // undefined
 * F.elemIndex(1, [1, 2, 3]) // 0
 *
 * F.elemIndex('a', 'foo') // undefined
 * F.elemIndex('o', 'foo') // 1
 */
export function elemIndex (a, as) {
  const i = as.indexOf(a)
  return (i >= 0) ? i : undefined
}

export default curry(elemIndex)

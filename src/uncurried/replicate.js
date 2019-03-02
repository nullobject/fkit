import array from '../array'
import isString from '../internal/isString'
import string from '../string'
import concatMap from './concatMap'

export default function replicate (n, a) {
  const as = isString(a) ? string(n) : array(n)
  return concatMap(() => [a], as)
}

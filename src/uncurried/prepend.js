import isString from '../internal/isString'

export default function prepend (a, bs) {
  return isString(bs) ? (a + bs) : [a].concat(bs)
}

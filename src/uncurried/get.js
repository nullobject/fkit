import isString from '../internal/isString'

export default function get (ks, o) {
  ks = isString(ks) ? ks.split('.') : ks
  return ks.reduce((a, k) => (a !== undefined) ? a[k] : undefined, o)
}

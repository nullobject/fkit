import isArray from '../internal/isArray'

export default function get (ks, o) {
  ks = isArray(ks) ? ks : ks.toString().split('.')
  return ks.reduce((a, k) => (a !== undefined) ? a[k] : undefined, o)
}

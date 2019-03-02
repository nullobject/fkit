import isString from '../internal/isString'

export default function getIn (ks, o) {
  ks = isString(ks) ? ks.split('.') : ks
  return ks.reduce((a, b) => (a !== undefined) ? a[b] : undefined, o)
}

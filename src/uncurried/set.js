import copy from '../copy'
import head from '../head'
import isString from '../internal/isString'
import tail from '../tail'

function set_ (ks, v, o) {
  const k = head(ks)

  if (ks.length > 1) {
    v = set_(tail(ks), v, o[k] || {})
  }

  return copy(o, { [k]: v })
}

export default function set (ks, v, o) {
  ks = isString(ks) ? ks.split('.') : ks
  return set_(ks, v, o)
}

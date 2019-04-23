import copy from '../copy'
import head from '../head'
import isArray from '../internal/isArray'
import tail from '../tail'

function set_ (ks, v, o) {
  const k = head(ks)

  if (ks.length > 1) {
    v = set_(tail(ks), v, o[k] || {})
  }

  return copy(o, { [k]: v })
}

export default function set (ks, v, o) {
  ks = isArray(ks) ? ks : ks.toString().split('.')
  return set_(ks, v, o)
}

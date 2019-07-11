import head from '../head'
import isArray from '../internal/isArray'
import tail from '../tail'

function has_ (ks, o) {
  const k = head(ks)

  if (ks.length === 1) {
    return Object.prototype.hasOwnProperty.call(o, k)
  } else {
    return has_(tail(ks), o[k] || {})
  }
}

export default function has (ks, o) {
  ks = isArray(ks) ? ks : ks.toString().split('.')
  return has_(ks, o)
}

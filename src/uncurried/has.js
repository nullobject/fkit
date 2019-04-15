import head from '../head'
import isString from '../internal/isString'
import tail from '../tail'

function has_ (ks, o) {
  const k = head(ks)

  if (ks.length === 1) {
    return o.hasOwnProperty(k)
  } else {
    return has_(tail(ks), o[k] || {})
  }
}

export default function has (ks, o) {
  ks = isString(ks) ? ks.split('.') : ks
  return has_(ks, o)
}

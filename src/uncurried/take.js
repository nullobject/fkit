import isString from '../internal/isString'

export default function take (n, as) {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = 0; i < Math.min(m, n); i++) {
    s = s.concat(as[i])
  }

  return s
}

import isString from '../internal/isString'

export default function takeWhile (p, as) {
  let s = isString(as) ? '' : []
  const n = as.length

  for (let i = 0; i < n && p(as[i]); i++) {
    s = s.concat(as[i])
  }

  return s
}

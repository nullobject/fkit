import isString from '../internal/isString'

export default function drop (n, as) {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
}

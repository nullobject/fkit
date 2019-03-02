import isString from '../internal/isString'

export default function dropWhile (p, as) {
  let s = isString(as) ? '' : []
  const m = as.length
  let n = 0

  while (n < m && p(as[n])) {
    n++
  }

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
}

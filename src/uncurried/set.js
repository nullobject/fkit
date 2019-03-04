import copy from '../copy'
export default function set (k, v, o) {
  const p = {}
  p[k] = v
  return copy(o, p)
}

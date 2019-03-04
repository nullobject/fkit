import get from './get'
import set from './set'

export default function pick (ks, o) {
  return ks.reduce((p, k) => set(k, get(k, o), p), {})
}

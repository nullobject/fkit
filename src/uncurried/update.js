import get from './get'
import set from './set'

export default function update (ks, f, o) {
  return set(ks, f(get(ks, o)), o)
}

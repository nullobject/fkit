import get from './get'
import set from './set'

export default function update (k, f, o) {
  return set(k, f(get(k, o)), o)
}

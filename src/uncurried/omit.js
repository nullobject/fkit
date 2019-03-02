import difference from '../difference'
import keys from '../keys'
import get from './get'
import set from './set'

export default function omit (ks, o) {
  return difference(keys(o), ks).reduce((p, k) => set(k, get(k, o), p), {})
}

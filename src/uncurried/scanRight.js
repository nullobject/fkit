import foldRight from './foldRight'
import tap from './tap'

export default function scanRight (f, s, as) {
  const r = [s]
  foldRight((a, b) => tap(r.unshift.bind(r), f(a, b)), s, as)
  return r
}

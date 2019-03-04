import fold from './fold'
import tap from './tap'

export default function scan (f, s, as) {
  const r = [s]
  fold((b, a) => tap(r.push.bind(r), f(b, a)), s, as)
  return r
}

import compose from '../compose'
import concatWith from '../internal/concatWith'
import flattenStrings from '../internal/flattenStrings'
import mempty from '../internal/mempty'

export default function concatMap (f, as) {
  const bs = Array.from(as).map(compose(flattenStrings, f))
  const cs = bs.length > 0 ? bs : as
  return concatWith(mempty(cs), bs)
}

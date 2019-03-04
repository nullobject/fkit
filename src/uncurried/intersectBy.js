import mempty from '../internal/mempty'
import any from './any'
import append from './append'
import fold from './fold'

export default function intersectBy (f, as, bs) {
  return fold((cs, a) => {
    return any(b => f(a, b), bs) ? append(a, cs) : cs
  }, mempty(as), as)
}

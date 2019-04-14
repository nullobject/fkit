import any from './any'
import append from './append'
import fold from './fold'
import nubBy from './nubBy'

export default function unionBy (f, as, bs) {
  return fold((cs, b) => {
    return any(a => f(a, b), as) ? cs : append(b, cs)
  }, nubBy(f, as), bs)
}

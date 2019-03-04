import any from './any'
import append from './append'
import fold from './fold'

export default function unionBy (f, as, bs) {
  return fold((cs, b) => {
    return any(a => f(a, b), as) ? cs : append(b, cs)
  }, as, bs)
}

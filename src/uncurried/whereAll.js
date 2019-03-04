import and from '../and'
import applyRight from '../applyRight'
export default function whereAll (ps, a) {
  return ps.map(applyRight(a)).reduce(and, true)
}

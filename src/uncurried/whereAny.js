import applyRight from '../applyRight'
import or from '../or'

export default function whereAny (ps, a) {
  return ps.map(applyRight(a)).reduce(or, false)
}

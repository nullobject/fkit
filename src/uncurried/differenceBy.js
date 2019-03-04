import flip from '../flip'
import nub from '../nub'
import removeBy from '../removeBy'
import fold from './fold'

export default function differenceBy (f, as, bs) {
  return fold(flip(removeBy(f)), nub(as), nub(bs))
}

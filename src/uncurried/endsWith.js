import eq from './eq'
import id from '../id'
import zipWith from './zipWith'

export default function endsWith (as, bs) {
  const n = Math.min(as.length, bs.length)
  return zipWith(eq, as.slice(-n), bs.slice(-n)).every(id)
}

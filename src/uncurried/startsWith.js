import eq from './eq'
import id from '../id'
import zipWith from './zipWith'

export default function startsWith (as, bs) {
  return zipWith(eq, as, bs).every(id)
}

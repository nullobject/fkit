import compose from '../compose'
import not from '../not'
import filter from './filter'

export default function partition (p, as) {
  return [
    filter(p, as),
    filter(compose(not, p), as)
  ]
}

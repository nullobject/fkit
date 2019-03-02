import head from '../head'
import filter from './filter'

export default function find (p, as) {
  return head(filter(p, as))
}

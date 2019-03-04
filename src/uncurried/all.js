import filter from './filter'

export default function all (p, as) {
  return filter(p, as).length === as.length
}

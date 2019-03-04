import append from './append'
import prepend from './prepend'

export default function surround (a, b, cs) {
  return append(b, prepend(a, cs))
}

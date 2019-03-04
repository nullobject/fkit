import max from './max'
import min from './min'

export default function clamp (a, b, n) {
  return max(a, min(n, b))
}

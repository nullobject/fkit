import eq from '../eq'
import findIndices from './findIndices'

export default function elemIndices (a, as) {
  return findIndices(eq(a), as)
}

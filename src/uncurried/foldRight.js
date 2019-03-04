import flip from '../flip'

export default function foldRight (f, s, as) {
  return Array.from(as).reduceRight(flip(f), s)
}

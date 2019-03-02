import isString from '../internal/isString'

export default function append (a, bs) {
  return isString(bs) ? (bs + a) : bs.concat([a])
}

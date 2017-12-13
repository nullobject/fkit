export function extend (target, objects) {
  objects.forEach(object => {
    Object.getOwnPropertyNames(object).forEach(property => {
      target[property] = object[property]
    })
  })
  return target
}

export const slice = Array.prototype.slice

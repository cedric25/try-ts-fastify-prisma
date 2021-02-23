interface makeFruitEntityParams {
  name: string
  color: string
}
export function makeFruitEntity({ name, color }: makeFruitEntityParams) {
  return Object.freeze({
    getName: () => name,
    getColor: () => color,
  })
}

export interface IOrderTable {
  id: number
  firstAddress: string
  secondAddress: string
  Driver: {
    id: number | string
    name: string
  }
  score: number
}

export type PointOrder = {
  id: string | number
  orderNumber: string
  from: string
  to: string
}
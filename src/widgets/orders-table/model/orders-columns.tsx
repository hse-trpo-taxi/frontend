import type { MRT_ColumnDef } from 'material-react-table'
import type { IOrderTable } from '../../../entities/order/model/order-type'

export const ordersColumns: MRT_ColumnDef<IOrderTable>[] = [
  { accessorKey: 'firstAddress', header: 'Начальный адрес' },
  { accessorKey: 'secondAddress', header: 'Конечный адрес' },
  { accessorKey: 'driver', header: 'Водитель', accessorFn: (row) => row.Driver.name },
  { accessorKey: 'score', header: 'Оценка пользователя' },
]

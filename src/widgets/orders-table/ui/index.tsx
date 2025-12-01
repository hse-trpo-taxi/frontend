import { useState } from 'react'
import { ORDER_STATUSES, type OrderStatus } from '../model/orders-statuses'
import { TableNavigation } from '../../../shared/ui/table-navigation'
import { TableWithPagination } from '../../../shared/ui/table-with-pagination/table-with-pagination'
import { ordersColumns } from '../model/orders-columns'

export const OrderTable = () => {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>('Все')

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)

  return (
    <div>
      <h1 className="text-[24px] mb-[20px] w-[100%]">Заказы</h1>
      <TableNavigation
        name={ORDER_STATUSES}
        currnet={currentStatus}
        setCurrent={setCurrentStatus}
      />
      <div className="mt-[20px]">
        <TableWithPagination
          name="Нет доступных заказов"
          data={[]}
          columns={ordersColumns}
          isLoading={false}
          onRefresh={() => { }}
          onRowClick={() => { }}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          rowCount={0}
          totalPage={0}
        />
      </div>
    </div>
  )
}

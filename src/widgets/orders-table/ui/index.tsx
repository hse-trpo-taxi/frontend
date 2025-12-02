import { useState } from 'react'
// import { type OrderStatus } from '../model/orders-statuses'
import { TableWithPagination } from '../../../shared/ui/table-with-pagination/table-with-pagination'
import { ordersColumns } from '../model/orders-columns'
import { useGetOrdersQuery } from '../../../entities/order/api/order-api'

export const OrderTable = () => {
  const { data, isLoading, refetch } = useGetOrdersQuery({ Skip: 0, Limit: 20 })
  // const [currentStatus, setCurrentStatus] = useState<OrderStatus>('Все')

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)

  return (
    <div className='h-full flex flex-col min-h-0'>
      <h1 className="text-[24px] w-[100%]">Заказы</h1>
      {/* <TableNavigation
        name={ORDER_STATUSES}
        currnet={currentStatus}
        setCurrent={setCurrentStatus}
      /> */}
      <div className="mt-[20px] flex-1 min-h-0 overflow-hidden">
        <TableWithPagination
          data={data || []}
          columns={ordersColumns}
          isLoading={isLoading}
          onRefresh={refetch}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          rowCount={20}
          totalPage={1}
        />
      </div>
    </div>
  )
}

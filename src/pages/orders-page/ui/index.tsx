import { OrderTable } from '../../../widgets/orders-table/ui'

export const OrdersPage = () => {
  return (
    <div className="px-[30px] py-[20px] flex gap-[40px] h-full min-h-0 w-full">
      <div className="flex-1">
        <OrderTable />
      </div>
    </div>
  )
}

import { useState } from 'react'
import { TableNavigation } from '../../../shared/ui/table-navigation'
import { DRIVER_STATUSES, type DriverStatus } from '../model/drivers-statuses'
import { TableWithPagination } from '../../../shared/ui/table-with-pagination/table-with-pagination'
import { driversColumns } from '../model/drivers-columns'

export const DriversTable = () => {
  const [currentStatus, setCurrentStatus] = useState<DriverStatus>('Все')

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)

  return (
    <div>
      <h1 className="text-[24px] mb-[20px] w-[100%]">Водители</h1>
      <TableNavigation
        name={DRIVER_STATUSES}
        currnet={currentStatus}
        setCurrent={setCurrentStatus}
      />
      <div className='mt-[20px]'>
        <TableWithPagination
          name="Нет доступных водителей"
          data={[]}
          columns={driversColumns}
          isLoading={false}
          onRefresh={() => {}}
          onRowClick={() => {}}
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

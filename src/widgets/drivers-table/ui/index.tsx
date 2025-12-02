import { useEffect, useState } from 'react'
import { TableNavigation } from '../../../shared/ui/table-navigation'
import { DRIVER_STATUSES, UI_TO_DB_STATUS, type DriverStatus } from '../model/drivers-statuses'
import { TableWithPagination } from '../../../shared/ui/table-with-pagination/table-with-pagination'
import { driversColumns } from '../model/drivers-columns'
import { useGetDriversTableAllQuery, useLazyGetDriversTablePagQuery } from '../../../entities/driver/api/driver-api'
import { useNavigate } from 'react-router-dom'

export const DriversTable = () => {

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useGetDriversTableAllQuery({});

  const [tableData, setTableData] = useState(data);
  const [currentStatus, setCurrentStatus] = useState<DriverStatus>('Все');

  const [trigger] = useLazyGetDriversTablePagQuery();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);

  useEffect(() => {
    if (currentStatus === 'Все') {
      setTableData(data);
      return;
    }
    const apiStatus = UI_TO_DB_STATUS[currentStatus];

    if (!apiStatus) return;

    trigger({ Skip: 0, Limit: pageSize, Status: apiStatus })
      .unwrap()
      .then((res) => {
        setPage(0);
        setTableData(res);
      });
  }, [currentStatus, pageSize, trigger, data]);

  useEffect(() => {
    if (currentStatus === 'Все' && data) {
      setTableData(data);
    }
  }, [data, currentStatus]);

  return (
    <div className="h-full flex flex-col min-h-0">
      <h1 className="text-[24px] mb-[20px] w-[100%]">Водители</h1>
      <TableNavigation
        name={DRIVER_STATUSES}
        currnet={currentStatus}
        setCurrent={setCurrentStatus}
      />
      <div className="mt-[20px] flex-1 min-h-0 overflow-hidden">
        <TableWithPagination
          data={tableData || []}
          columns={driversColumns}
          isLoading={isLoading}
          onRefresh={refetch}
          onRowClick={(row) => navigate(`/drivers/${row.id}`)}
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

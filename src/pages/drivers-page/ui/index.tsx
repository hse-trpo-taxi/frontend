import { DriversTable } from '../../../widgets/drivers-table/ui'

export const DriversPage = () => {
  return (
    <div className="px-[30px] py-[20px] flex gap-[40px] h-full min-h-0 w-full">
      <div className="flex-1">
        <DriversTable />
      </div>
    </div>
  )
}

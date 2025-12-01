import { useState } from "react"
import { TableNavigation } from "../../../shared/ui/table-navigation"
import { DRIVER_STATUSES, type DriverStatus } from "../model/drivers-statuses"

export const DriversTable = () => {

    const [currentStatus, setCurrentStatus] = useState<DriverStatus>('Все');

    return (
        <div>
            <h1 className="text-[24px] mb-[20px] w-[100%]">Водители</h1>
            <TableNavigation name={DRIVER_STATUSES} currnet={currentStatus} setCurrent={setCurrentStatus}/>
        </div>
    )
}
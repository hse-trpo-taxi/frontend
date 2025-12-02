import { useParams } from "react-router-dom"
import { CarInfo } from "../../../widgets/car-info/ui"
import { DriverDocumnetInfo } from "../../../widgets/driver-documnet-info/ui"
import { DriverInfo } from "../../../widgets/driver-info/ui"
import { DriverTimetable } from "../../../widgets/driver-timetable/ui"
import { SingleDriverMap } from "../../../widgets/single-driver-map/ui"
import { OrdersBlock } from "../../../widgets/timeline-orders/ui"
import { useGetSingleDriverQuery } from "../../../entities/driver/api/driver-api"

export const SingleDriver = () => {
    const { id } = useParams();
    const { data } = useGetSingleDriverQuery(id);
    return (
        <div className="px-[50px] py-[20px] h-full min-h-0 w-full">
            {data && id && (
                <>
                    <h1 className="text-[24px] mb-[20px] w-[100%]">{data.driver.name}</h1>
                    <div className="flex gap-[40px]">
                        <CarInfo id={id} />
                        <DriverInfo id={id} />
                        <div className="ml-[30px]">
                            <DriverDocumnetInfo id={id} />
                        </div>
                    </div>
                    <div className="flex mt-[10px]">
                        <SingleDriverMap id={id} />
                        <OrdersBlock />
                        <DriverTimetable id={id} />
                    </div>
                </>
            )}
        </div>
    )
}
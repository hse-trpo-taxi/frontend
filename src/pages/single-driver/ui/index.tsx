import { CarInfo } from "../../../widgets/car-info/ui"
import { DriverDocumnetInfo } from "../../../widgets/driver-documnet-info/ui"
import { DriverInfo } from "../../../widgets/driver-info/ui"
import { DriverTimetable } from "../../../widgets/driver-timetable/ui"
import { SingleDriverMap } from "../../../widgets/single-driver-map/ui"
import { OrdersBlock } from "../../../widgets/timeline-orders/ui"

export const SingleDriver = () => {
    return (
        <div className="px-[50px] py-[20px] h-full min-h-0 w-full">
            <h1 className="text-[24px] mb-[20px] w-[100%]">Козлова Анастасия Александровна</h1>
            <div className="flex gap-[40px]">
                <CarInfo />
                <DriverInfo />
                <div className="ml-[30px]">
                    <DriverDocumnetInfo />
                </div>
            </div>
            <div className="flex mt-[10px]">
                <SingleDriverMap/>
                <OrdersBlock/>
                <DriverTimetable/>
            </div>
        </div>
    )
}
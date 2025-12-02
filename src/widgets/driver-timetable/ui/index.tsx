import { useGetDriverSheduleQuery } from "../../../entities/driver/api/driver-api";
import { ButtonComponent } from "../../../shared/ui/button-component"
import { Calendar } from "../../../shared/ui/calendar"

type DriverTimetableType = {
    id: string;
}

export const DriverTimetable = ({ id }: DriverTimetableType) => {
    const { data } = useGetDriverSheduleQuery(id);
    const days = data?.map(item => new Date(item.date).getDay());
    console.log(days)
    return (
        <div>
            <h2 className="mt-[20px] mb-[20px]">График работы на следующий месяц</h2>
            <Calendar markedDays={days || []} />
            <div className="flex mt-[15px]">
                <div className="ml-auto">
                    <ButtonComponent name="Согласовать" />
                </div>
            </div>
        </div>
    )
}
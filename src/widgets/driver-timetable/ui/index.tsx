import { ButtonComponent } from "../../../shared/ui/button-component"
import { Calendar } from "../../../shared/ui/calendar"

export const DriverTimetable = () => {
    return (
        <div>
            <h2 className="mt-[20px] mb-[20px]">График работы на следующий месяц</h2>
            <Calendar markedDays={[9, 13, 22, 27]} />
            <div className="flex mt-[15px]">
                <div className="ml-auto">
                    <ButtonComponent name="Согласовать" />
                </div>
            </div>
        </div>
    )
}
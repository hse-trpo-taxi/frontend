import { BlueAttribute } from "../../../shared/ui/blue-attribute"
import { MapComponent } from "../../../shared/ui/map"

export const SingleDriverMap = () => {
    return (
        <div className="mt-[20px] h-[52vh] w-[550px]">
            <div className="flex px-[15px] gap-[40px] mb-[5px]">
                <BlueAttribute name="Время в поезде" value="1 ч. 10 мин." />
                <BlueAttribute name="Пассажиров" value="4" />
                <BlueAttribute name="Расчетное окончание" value="14:53" />
            </div>
            <MapComponent
                mode="route"
                center={[55.75, 37.62]}
                zoom={11}
                route={{
                    start: [55.72, 37.55],
                    end: [55.78, 37.70],
                    carCoords: [55.75, 37.63],
                }}
            />
        </div>
    )
}
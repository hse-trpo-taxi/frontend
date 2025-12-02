import { useGetDriverMapQuery } from "../../../entities/driver/api/driver-api";
import { BlueAttribute } from "../../../shared/ui/blue-attribute"
import { MapComponent } from "../../../shared/ui/map"

type SingleDriverMapType = {
    id: string;
};

export const SingleDriverMap = ({ id }: SingleDriverMapType) => {
    const { data } = useGetDriverMapQuery(id);
    return (
        <div className="mt-[20px] h-[52vh] w-[550px]">
            {data ? (
                <>
                    <div className="flex px-[15px] gap-[40px] mb-[5px]">
                        <BlueAttribute name="Время в поезде" value={`${data.Info.time} мин`} />
                        <BlueAttribute name="Пассажиров" value={data.Info.passengers.toString()} />
                        <BlueAttribute name="Расчетное окончание" value="14:53" />
                    </div>
                    <MapComponent
                        mode="route"
                        center={[55.75, 37.62]}
                        zoom={11}
                        route={{
                            carCoords: [data.y, data.x],
                        }}
                    />
                </>
            ) : (<h2>Нет текущей поездки</h2>)}
        </div>
    )
}
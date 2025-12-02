import { useGetSingleDriverQuery } from "../../../entities/driver/api/driver-api";
import { Attribute } from "../../../shared/ui/attribute"
import { Score } from "../../../shared/ui/score"

type CarInfoType = {
    id: string;
}

export const CarInfo = ({ id }: CarInfoType) => {
    const { data } = useGetSingleDriverQuery(id);
    return (
        <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px]">
            <h2>Автомобиль</h2>
            {data && (
                <div className="mt-[10px] flex gap-[40px]">
                    <div>
                        <Attribute name="Номер" value={data.car.number.toString()} />
                        <div className="mt-[10px] flex gap-[20px]">
                            <Attribute name="Модель" value={data.car.model} />
                            <Attribute name="Пробег" value={data.car.mileage.toString()} />
                        </div>
                    </div>
                    <div className="mt-auto flex gap-[10px]">
                        <Score score={data.car.scoreUsers} description="Оценка пользователей" />
                        <Score score={data.car.scoreSystem} description="Оценка системы" />
                    </div>
                </div>
            )}
        </div>
    )
}
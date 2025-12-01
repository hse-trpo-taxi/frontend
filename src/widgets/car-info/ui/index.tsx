import { Attribute } from "../../../shared/ui/attribute"
import { Score } from "../../../shared/ui/score"

export const CarInfo = () => {
    return (
        <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px]">
            <h2>Автомобиль</h2>
            <div className="mt-[10px] flex gap-[40px]">
                <div>
                    <Attribute name="Номер" value="А777АА777" />
                    <div className="mt-[10px] flex gap-[20px]">
                        <Attribute name="Модель" value="Volvo XC40" />
                        <Attribute name="Пробег" value="22 230" />
                    </div>
                </div>
                <div className="mt-auto flex gap-[10px]">
                    <Score score={5} description="Оценка пользователей" />
                    <Score score={4} description="Оценка системы" />
                </div>
            </div>
        </div>
    )
}
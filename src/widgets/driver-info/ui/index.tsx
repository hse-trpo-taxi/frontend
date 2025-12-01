import { Attribute } from "../../../shared/ui/attribute"
import { BigScore } from "../../../shared/ui/big-score"
import { ButtonComponent } from "../../../shared/ui/button-component"

export const DriverInfo = () => {
    return (
        <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px]">
            <h2>Водитель</h2>
            <div className="mt-[10px] flex gap-[60px]">
                <Attribute name="Номер" value="+7 912 465 49 47" />
                <div className="flex mt-[-20px] w-[160px]">
                    <BigScore score={4.7} star={true} name="Оценка водителей" />
                </div>
            </div>
            <div className="flex">
                <Attribute name="Статус" value="Свободен" color="#29C033" />
                <div className="ml-auto mr-[7px]">
                    <ButtonComponent name="Связаться" />
                </div>
            </div>
        </div>
    )
}
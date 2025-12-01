import { Attribute } from "../../../shared/ui/attribute"

export const DriverDocumnetInfo = () => {
    return (
        <div className="mt-[-35px]">
            <h2>Данные о водителе</h2>
            <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px] mt-[10px]">
                <Attribute name="Паспорт" value="9416 610123" />
                <div className="mt-[10px]">
                    <Attribute name="СНИЛС" value="888-888-888 00" />
                </div>
                <div className="mt-[10px]">
                    <Attribute name="ИНН" value="1234567893505" />
                </div>
            </div>
        </div>
    )
}
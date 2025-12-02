import { useGetSingleDriverQuery } from "../../../entities/driver/api/driver-api";
import { Attribute } from "../../../shared/ui/attribute"

type DriverDocumnetInfoType = {
    id: string;
}

export const DriverDocumnetInfo = ({ id }: DriverDocumnetInfoType) => {
    const { data } = useGetSingleDriverQuery(id);
    return (
        <div className="mt-[-35px]">
            <h2>Данные о водителе</h2>
            {data && (
                <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px] mt-[10px]">
                    <Attribute name="Паспорт" value={data.driver.passport.toString()} />
                    <div className="mt-[10px]">
                        <Attribute name="СНИЛС" value={data.driver.snils.toString()} />
                    </div>
                    <div className="mt-[10px]">
                        <Attribute name="ИНН" value={data.driver.inn.toString()} />
                    </div>
                </div>
            )}
        </div>
    )
}
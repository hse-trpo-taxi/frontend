import { useGetSingleDriverQuery } from "../../../entities/driver/api/driver-api";
import { Attribute } from "../../../shared/ui/attribute"
import { BigScore } from "../../../shared/ui/big-score"
import { ButtonComponent } from "../../../shared/ui/button-component"
import { DB_TO_UI_STATUS } from "../../drivers-table/model/drivers-statuses";

type DriverInfo = {
    id: string;
}

export const DriverInfo = ({ id }: DriverInfo) => {
    const { data } = useGetSingleDriverQuery(id);
    return (
        <div className="w-auto bg-[#F4F4F4] px-[15px] py-[10px] rounded-[17px]">
            <h2>Водитель</h2>
            {data && (
                <>
                    <div className="mt-[10px] flex gap-[60px]">
                        <Attribute name="Номер" value={data.driver.phone} />
                        <div className="flex mt-[-20px] w-[160px]">
                            <BigScore score={Math.floor(data.driver.scoreDriver)} star={true} name="Оценка водителей" />
                        </div>
                    </div>
                    <div className="flex">
                        <Attribute name="Статус" value={DB_TO_UI_STATUS[data.driver.status]} />
                        <div className="ml-auto mr-[7px]">
                            <ButtonComponent name="Связаться" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
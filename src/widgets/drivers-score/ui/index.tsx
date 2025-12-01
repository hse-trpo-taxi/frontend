import { BigScore } from "../../../shared/ui/big-score"

export const DriversScore = () => {
    return (
        <div>
            <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                <BigScore score={4.8} star={true} name="Оценка водителей"/>
            </div>
            <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                <BigScore score={7.2} star={false} name="Время ожидания"/>
            </div>
            <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                <BigScore score={23} star={false} name="Простой водителей"/>
            </div>
        </div>
    )
}
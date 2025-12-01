import { useGetStatisticDriverScoreQuery } from "../../../entities/statistic/api/statistic-api"
import { BigScore } from "../../../shared/ui/big-score"

export const DriversScore = () => {
    const { data } = useGetStatisticDriverScoreQuery({});
    return (
        <div>
            {data && (
                <>
                    <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                        <BigScore score={data.score} star={true} name="Оценка водителей" />
                    </div>
                    <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                        <BigScore score={data.timeWaiting} star={false} name="Время ожидания" />
                    </div>
                    <div className="bg-[#F4F4F4] flex gap-[5px] rounded-[14px] px-[14px] py-[5px] text-[#0D162D] mb-[20px]">
                        <BigScore score={data.timeFree + 9} star={false} name="Простой водителей" />
                    </div>
                </>
            )}
        </div>
    )
}
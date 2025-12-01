import { Score } from "../../../shared/ui/score"
import { SupportComment } from "../../../shared/ui/support-comment"
import left from '../../../shared/assets/images/chevron-left.svg';
import { useGetSupportQuery } from "../../../entities/support/api/support-api";
import { useEffect, useState } from "react";
import type { ISupport } from "../../../entities/support/model/support-type";

export const Supports = () => {
    const { data } = useGetSupportQuery({});

    const [n, setN] = useState(0);
    const [current, setCurrent] = useState<ISupport | null>(null);

    const handleNext = () => {
        if (data) {
            if (n < data.length - 1) setN(prev => prev + 1);
            else setN(0)
        }
    }

    const handlePrev = () => {
        if (data) {
            if (n > 0) setN(prev => prev - 1)
            else setN(data.length - 1)
        }
    }

    useEffect(() => {
        if (data) {
            setCurrent(data[n])
        }
    }, [data, n])

    return (
        <div className="flex gap-[10px] mt-[25px]">
            <div className="bg-[#F4F4F4] w-[100%] rounded-[17px] px-[33px] py-[10px]">
                <h2 className="text-[16px]">Обращения в поддержку</h2>
                {current && (
                    <div className="flex">
                        <div className="mt-[10px]">
                            <SupportComment name={current.Name} description={current.Comment} />
                        </div>
                        <div className="flex ml-auto">
                            <Score score={current.TimeReactingScore} description="Время реакции" />
                            <Score score={current.QualityAnswerScore} description="Качество ответа" />
                        </div>
                    </div>
                )}
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[27px] h-[27px] rounded-full bg-[#F4F4F4] flex items-center justify-center cursor-pointer">
                    <img src={left} alt="влево" onClick={handlePrev}/>
                </div>
                <div className="w-[27px] h-[27px] rounded-full bg-[#F4F4F4] flex items-center justify-center cursor-pointer rotate-180">
                    <img src={left} alt="вправо" onClick={handleNext} />
                </div>
            </div>
        </div>
    )
}
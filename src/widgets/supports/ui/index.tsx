import { Score } from "../../../shared/ui/score"
import { SupportComment } from "../../../shared/ui/support-comment"
import left from '../../../shared/assets/images/chevron-left.svg';

export const Supports = () => {
    return (
        <div className="flex gap-[10px] mt-[25px]">
            <div className="bg-[#F4F4F4] w-[100%] rounded-[17px] px-[33px] py-[10px]">
                <h2 className="text-[16px]">Обращения в поддержку</h2>
                <div className="flex">
                    <div className="mt-[10px]">
                        <SupportComment name="Николай Моисеев" description="Отменили деньги"/>
                    </div>
                    <div className="flex ml-auto">
                        <Score score={5} description="Время реакции"/>
                        <Score score={4} description="Качество ответа"/>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[27px] h-[27px] rounded-full bg-[#F4F4F4] flex items-center justify-center cursor-pointer">
                    <img src={left} alt="влево"/>
                </div>
                <div className="w-[27px] h-[27px] rounded-full bg-[#F4F4F4] flex items-center justify-center cursor-pointer rotate-180">
                    <img src={left} alt="вправо"/>
                </div>
            </div>
        </div>
    )
}
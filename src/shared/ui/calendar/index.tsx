import { monthNamesShortRu, weekDaysShortRu } from "./calendar-const";

type CalendarProps = {
    markedDays?: number[];
};


export const Calendar = ({ markedDays }: CalendarProps) => {
    const today = new Date();

    const monthDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const jsDay = monthDate.getDay();
    const firstWeekDayIndex = (jsDay + 6) % 7;

    const cells: (number | null)[] = [];

    for (let i = 0; i < firstWeekDayIndex; i++) {
        cells.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(day);
    }

    while (cells.length < 42) {
        cells.push(null);
    }

    return (
        <div className="inline-flex flex-col rounded-[16px] border border-[#E2E4E8] p-4 bg-white w-[100%]">
            <div className="flex items-center justify-center mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-[14px] font-medium text-[#0D162D]">
                        {monthNamesShortRu[month]}
                    </span>
                    <span className="text-[14px] text-[#0D162D]">{year}</span>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-1 mb-2 text-[11px] text-[#8F9399] text-center">
                {weekDaysShortRu.map((d) => (
                    <div key={d}><p>{d}</p></div>
                ))}
            </div>

            {/* Сетка дней */}
            <div className="grid grid-cols-7 gap-y-1 text-[13px] text-center">
                {cells.map((day, idx) => {
                    if (!day) return <div key={idx}></div>;

                    const isMarked = markedDays?.includes(day);

                    return (
                        <div key={idx} className="flex justify-center">
                            <div
                                className={
                                    isMarked
                                        ? "w-7 h-7 rounded-full flex items-center justify-center bg-[#0D162D] text-white"
                                        : "w-7 h-7 rounded-full flex items-center justify-center text-[#0D162D]"
                                }
                            >
                                <p>{day}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
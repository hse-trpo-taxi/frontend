import type { PointOrder } from "../../../entities/order/model/order-type"

type TimelineProps = {
    items: PointOrder[]
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="relative w-[220px]">
            <div className="absolute left-[10px] top-4 bottom-4 w-[2px] bg-[#0D162D]" />
            <div className="flex flex-col gap-6">
                {items.map((item, index) => {
                    const isActive = index === 0
                    return (
                        <div key={item.id} className="flex items-start gap-4 relative z-10">
                            <div className="mt-[4px]">
                                <div
                                    className={
                                        isActive
                                            ? 'w-[18px] h-[18px] rounded-full bg-white border-[3px] border-[#0D162D]'
                                            : 'w-[14px] h-[14px] rounded-full bg-[#0D162D]'
                                    }
                                />
                            </div>
                            <div
                                className={
                                    isActive
                                        ? 'bg-[#F4F5F7] rounded-[12px] px-3 py-2 text-[12px]'
                                        : 'text-[12px] text-[#8F9399] px-3 py-2'
                                }
                            >
                                <p className={isActive ? 'text-black' : ''}>
                                    Заказ №{item.orderNumber}
                                </p>
                                <p className="mt-[2px]">{item.from}</p>
                                <p className="mt-[2px]">
                                    <span className={isActive ? 'text-[#1049D9]' : ''}>{item.to}</span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

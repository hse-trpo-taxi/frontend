import type { PointOrder } from "../../../entities/order/model/order-type"
import { Timeline } from "../../../shared/ui/timeline"

const data: PointOrder[] = [
    {
        id: 1,
        orderNumber: '134524',
        from: 'ул. Маковского, 2',
        to: 'Таллинская, 34',
    },
    {
        id: 2,
        orderNumber: '4578285',
        from: 'Рождественская, 19',
        to: 'ул. Гончарова, 46',
    },
    {
        id: 3,
        orderNumber: '147952',
        from: 'ул. Пионерская, 22',
        to: 'Покровский бульвар, 18',
    },
]

export const OrdersBlock = () => (
    <div className="p-4">
        <Timeline items={data} />
    </div>
)

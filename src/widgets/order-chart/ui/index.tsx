import { LineChartComponent } from "../../../shared/ui/line-chart"

export const OrderChart = () => {
    return (
        <div className="mt-[20px] h-[35vh]">
            <h2 className="ml-[33px] mb-[20px]">Статистика заказов за неделю</h2>
            <LineChartComponent/>
        </div>
    )
}
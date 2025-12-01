import { useGetStatisticOrderQuery } from "../../../entities/statistic/api/statistic-api"
import { LineChartComponent } from "../../../shared/ui/line-chart"

export const OrderChart = () => {
    const { data } = useGetStatisticOrderQuery({});
    return (
        <div className="mt-[20px] h-[35vh]">
            <h2 className="ml-[33px] mb-[20px]">Статистика заказов за неделю</h2>
            {data && (<LineChartComponent values={data} />)}
        </div>
    )
}
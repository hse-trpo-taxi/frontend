import { useGetStatisticDriverQuery } from "../../../entities/statistic/api/statistic-api"
import { PieChartComponent } from "../../../shared/ui/pie-chart"

export const DriversPieChart = () => {
    const { data } = useGetStatisticDriverQuery({});
    return (
        <div className="h-[40vh] w-[435px]">
            <h2>Водители</h2>
            {data && (<PieChartComponent values={data} />)}
        </div>
    )
}
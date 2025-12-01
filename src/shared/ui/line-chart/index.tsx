import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { IStatisticOrder } from "../../../entities/statistic/model/statistic-type";

type LineChartComponentType = {
  values: IStatisticOrder;
}

export const LineChartComponent = ({ values }: LineChartComponentType) => {
  const data = [
    { day: "пн", value: values.mon },
    { day: "вт", value: values.tue },
    { day: "ср", value: values.wed },
    { day: "чт", value: values.thu },
    { day: "пт", value: values.fri },
    { day: "сб", value: values.sat },
    { day: "вс", value: values.sun },
  ];

  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
        <CartesianGrid stroke="#e5e7eb" />
        <XAxis dataKey="day" tick={{ fontSize: 14, fill: 'black', fontFamily: 't2-Rooftop' }} />
        <YAxis tick={{ fontSize: 14, fill: 'black', fontFamily: 't2-Rooftop' }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          name="Кол-во заказов"
          stroke="#2563eb"
          strokeWidth={3}
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
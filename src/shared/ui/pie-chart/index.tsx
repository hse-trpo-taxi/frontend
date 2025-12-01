import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import type { IStatisticDriver } from "../../../entities/statistic/model/statistic-type";

type PieChartComponentProps = {
  values: IStatisticDriver;
};

const renderLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontFamily="t2-Rooftop"
    >
      {value}%
    </text>
  );
};

export const PieChartComponent = ({ values }: PieChartComponentProps) => {

  const data = [
    { name: "На заказ", value: values.order, color: "#1049D9" },
    { name: "Свободен", value: values.free, color: "#293A8C" },
    { name: "Технический перерыв", value: values.technical, color: "#758AE5" },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={110}
          startAngle={90}
          endAngle={-270}
          label={renderLabel}
          labelLine={false}
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>

        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          wrapperStyle={{
            fontSize: "12px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};


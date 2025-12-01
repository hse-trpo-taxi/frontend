import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const LineChartComponent = () => {
    const data = [
    { day: "пн", value: 200 },
    { day: "вт", value: 140 },
    { day: "ср", value: 250 },
    { day: "чт", value: 390 },
    { day: "пт", value: 500 },
    { day: "сб", value: 380 },
    { day: "вс", value: 430 },
  ];

  return (
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid stroke="#e5e7eb" /> 
          <XAxis dataKey="day" tick={{ fontSize: 14, fill: 'black', fontFamily: 't2-Rooftop' }}/>
          <YAxis tick={{ fontSize: 14, fill: 'black', fontFamily: 't2-Rooftop' }}/>
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
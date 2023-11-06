import { ComponentProps } from "react";
import { ChartContainer } from "./styles";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

export function Chart() {
  const userFilteredByDate = [
    { date: 'Último ano', quantity: 400 },
    { date: 'Últimos três meses', quantity: 500 },
    { date: 'Último mês', quantity: 250 },
    { date: 'Últimos 7 dias', quantity: 200 },
    { date: 'No último dia', quantity: 100 },
  ];

  return (
    <ChartContainer>
      <ResponsiveContainer className="chart" width="95%">
        <LineChart accessibilityLayer={true} data={userFilteredByDate} margin={{ top: 30, right: 40, left: 0, bottom: 30 }}>

          <Line type="linear" strokeWidth={2} dataKey="quantity" stroke="#fcbf49" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date">
            <Label
              value={"Dias"}
              position="insideBottomRight"
              dx={0}
              dy={30}
            />
          </XAxis>
          <YAxis>
            <Label
              value={"Quantidade de usuários"} position="center"
              angle={-90}
              dx={-20}
            />
          </YAxis>
          <Tooltip wrapperClassName="tooltip" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export type ChartProps = ComponentProps<typeof ChartContainer>

Chart.displayname = 'Chart'
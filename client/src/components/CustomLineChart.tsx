import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';

type Props = {
  chartData: any;
  xAsisDatakey: string;
  yAsisDatakey: string;
  stroke:  string;
  animation?: boolean;
};

const CustomLineChart = ({chartData, xAsisDatakey, yAsisDatakey, stroke, animation}: Props) => {
  return (
    <>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={400}
            data={chartData}
            margin={{
                top: 15,
                right: 20,
                left: -25,
                bottom: 50,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey= {xAsisDatakey}/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey={yAsisDatakey} isAnimationActive={animation} stroke={stroke} dot={false}/>
            </LineChart>
        </ResponsiveContainer>
      </>
  )
}

export default CustomLineChart
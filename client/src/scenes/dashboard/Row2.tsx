import DashboardBox from '@/components/DashboardBox';
import { useGetAQVoltagesQuery } from '@/state/api';
import { useMemo } from 'react';
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';

type Props = {}

const Row2 = (props: Props) => {
  const {data} = useGetAQVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));
  
  
  return (
    <>
    <DashboardBox gridArea="d">
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={700}
          height={400}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="voltage" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="e"></DashboardBox>
    <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2
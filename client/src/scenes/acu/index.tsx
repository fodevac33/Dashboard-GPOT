import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';


type Props = {}
  
const Acu = (props: Props) => {

  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));

  return (
    <DashboardBox width="100%" height="100%" p="1rem">
      <BoxHeader
            title="Voltaje ACU"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Volts"
          />
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" dataKey="voltage" stroke="#8884d8" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Acu;
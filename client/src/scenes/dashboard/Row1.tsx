import DashboardBox from '@/components/DashboardBox'
import { useGetAcuVoltagesQuery } from '@/state/api';
import { CartesianGrid, Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import BoxHeader from '@/components/BoxHeader';


type Props = {}

const socket = io('http://localhost:1337', {
  transports: ['websocket', 'polling']
});


const Row1 = (props: Props) => {
  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));

  const [dataRealTime, setData] = useState([]);

  useEffect(() => {
    socket.on('dataRealTime', (dataRealTime) => {
      setData(dataRealTime);
      console.log("dataRealTime:", dataRealTime);
    });
  }, []);

  


  return (
    <>
    <DashboardBox gridArea="a">
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

    <DashboardBox gridArea="b"></DashboardBox>

    
    <DashboardBox gridArea="c">
    <BoxHeader
            title="Voltaje ACU Tiempo Real"
            sideText="Volts"
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTime}
          margin={{
            top: 20,
            right: 20,
            left: -25,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis/>
          <Tooltip/>
          <Line type="monotone" isAnimationActive={false} dataKey="voltage" stroke="#8884d8" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    </>
  )
} 

export default Row1
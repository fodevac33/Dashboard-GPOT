import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useGetAcuVoltagesQuery } from '@/state/api';



type Props = {}

const socket = io('http://localhost:1337', {
  transports: ['websocket', 'polling']
});

const GraphsVCPS = (props: Props) => {


    const {data} = useGetAcuVoltagesQuery();
    console.log('data:', data);
    const chartData = data?.map(item => ({
        time: item.time,
        voltage: item.voltage,
    }));


    const [dataRealTimeVoltage, setDataVoltage] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeVoltage', (dataRealTimeVoltage) => {
        setDataVoltage(dataRealTimeVoltage);
        console.log("dataRealTimeVoltage:", dataRealTimeVoltage);
      });
    }, []);
  
    const [dataRealTimeCurrent, setDataCurrent] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeCurrent', (dataRealTimeCurrent) => {
        setDataCurrent(dataRealTimeCurrent);
        console.log("dataRealTimeCurrent:", dataRealTimeCurrent);
      });
    }, []);

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Voltaje ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Volts"
            sideTextcolor= '#D93D04'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeVoltage}
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
          <Line type="monotone" dataKey="voltage" stroke="#D93D04" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de corriente registrados por el ACU"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeCurrent}
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
          <Line type="monotone" dataKey="current" stroke="#F27405" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia ACU"
            subtitle="Este grafica muestra los ultimos valores de potencia registrados por el ACU"
            sideText="Watts"
            sideTextcolor= '#F29F05'
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
          <Line type="monotone" dataKey="voltage" stroke="#F29F05" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPS;
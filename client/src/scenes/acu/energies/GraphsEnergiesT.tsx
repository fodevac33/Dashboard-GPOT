import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line} from 'recharts';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import socket from '@/state/socket';
import React, { useState, useEffect } from 'react';



type Props = {}

const GraphsEnergiesT = (props: Props) => {

    const [dataRealTimeImportedEnergy, setDataImportedEnergy] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeImportedEnergy', (dataRealTimeImportedEnergy) => {
        setDataImportedEnergy(dataRealTimeImportedEnergy);
        console.log("dataRealTimeImportedEnergy:", dataRealTimeImportedEnergy);
      });
    }, []);
  
    const [dataRealTimeExportedEnergy, setDataExportedEnergy] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeExportedEnergy', (dataRealTimeExportedEnergy) => {
        setDataExportedEnergy(dataRealTimeExportedEnergy);
        console.log("dataRealTimeExportedEnergy:", dataRealTimeExportedEnergy);
      });
    }, []);

    const [dataRealTimeNetEnergy, setDataNetEnergy] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeNetEnergy', (dataRealTimeNetEnergy) => {
        setDataNetEnergy(dataRealTimeNetEnergy);
        console.log("dataRealTimeNetEnergy:", dataRealTimeNetEnergy);
      });
    }, []);

    const [dataRealTimeTotalEnergy, setDataTotalEnergy] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeTotalEnergy', (dataRealTimeTotalEnergy) => {
        setDataTotalEnergy(dataRealTimeTotalEnergy);
        console.log("dataRealTimeTotalEnergy:", dataRealTimeTotalEnergy);
      });
    }, []);

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Energía Importada en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#98D936'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeImportedEnergy}
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
          <Line type="monotone" isAnimationActive={false} dataKey="imported" stroke="#98D936" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#4ABF2A'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeExportedEnergy}
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
          <Line type="monotone" isAnimationActive={false} dataKey="exported" stroke="#4ABF2A" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#D7F205'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeNetEnergy}
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
          <Line type="monotone" isAnimationActive={false} dataKey="net" stroke="#D7F205" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#84D98A'
          />
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={dataRealTimeTotalEnergy}
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
          <Line type="monotone" isAnimationActive={false} dataKey="total" stroke="#84D98A" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>

  </>
  )
}

export default GraphsEnergiesT;

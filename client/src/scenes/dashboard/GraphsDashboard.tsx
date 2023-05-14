import DashboardBox from '@/components/DashboardBox'
import { useGetAcuVoltagesQuery } from '@/state/api';
import socket from '@/state/socket';
import React, { useState, useEffect } from 'react';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}



const GraphsDashboard = (props: Props) => {
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
            title="Voltaje ACU"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Volts"
          />
    <CustomLineChart 
          chartData={chartData}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = '#8884d8'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
    <BoxHeader
            title="Corriente ACU Tiempo Real"
            sideText="Amps"
          />
    <CustomLineChart 
          chartData={dataRealTimeCurrent}
          xAsisDatakey='time'
          yAsisDatakey='current'
          stroke = '#8884d8'
          animation = {false}/>
          
    </DashboardBox>

    
    <DashboardBox gridArea="c">
    <BoxHeader
            title="Voltaje ACU Tiempo Real"
            sideText="Volts"
          />
    <CustomLineChart 
          chartData={dataRealTimeVoltage}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = '#8884d8'
          animation = {false}/>
          
    </DashboardBox>
    </>
  )
} 

export default GraphsDashboard;
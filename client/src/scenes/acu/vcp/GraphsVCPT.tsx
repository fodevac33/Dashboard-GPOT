import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}



const GraphsVCPT = (props: Props) => {


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

    const [dataRealTimePower, setDataPower] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimePower', (dataRealTimePower) => {
        setDataPower(dataRealTimePower);
        console.log("dataRealTimePower:", dataRealTimePower);
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
      <CustomLineChart 
          chartData={dataRealTimeVoltage}
          xAsisDatakey='time'
          yAsisDatakey='voltage'
          stroke = '#D93D04'
          animation = {false}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de corriente registrados por el ACU"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
      <CustomLineChart 
          chartData={dataRealTimeCurrent}
          xAsisDatakey='time'
          yAsisDatakey='current'
          stroke = '#F27405'
          animation = {false}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de potencia registrados por el ACU"
            sideText="Watts"
            sideTextcolor= '#F29F05'
          />
      <CustomLineChart 
          chartData={dataRealTimePower}
          xAsisDatakey='time'
          yAsisDatakey='power'
          stroke = '#F29F05'
          animation = {false}/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPT;

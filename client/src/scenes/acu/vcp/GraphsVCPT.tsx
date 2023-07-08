import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}



const GraphsVCPT = (props: Props) => {


    const [dataRealTimeVoltage, setDataVoltage] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeVoltage', (dataVoltage) => {
        setDataVoltage(dataVoltage);
        console.log("dataRealTimeVoltage:", dataVoltage);
      });
    }, []);
  
    const [dataRealTimeCurrent, setDataCurrent] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeCurrent', (dataCurrent) => {
        setDataCurrent(dataCurrent);
        console.log("dataRealTimeCurrent:", dataCurrent);
      });
    }, []);

    const [dataRealTimePower, setDataPower] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimePower', (dataPower) => {
        setDataPower(dataPower);
        console.log("dataRealTimePower:", dataPower);
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
          yAsisDatakey='value'
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
          yAsisDatakey='value'
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
          yAsisDatakey='value'
          stroke = '#F29F05'
          animation = {false}/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPT;

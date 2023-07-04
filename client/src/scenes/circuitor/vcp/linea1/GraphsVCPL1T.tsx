import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';



type Props = {}

  
const GraphsVCPL1T = (props: Props) => {

    const [dataRealTimeVoltageL1, setDataVoltage] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeVoltageL1', (dataVoltage) => {
        setDataVoltage(dataVoltage);
        console.log("dataRealTimeVoltage", dataVoltage);
      });
    }, []);
  
    const [dataRealTimeCurrentL1, setDataCurrent] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeCurrentL1', (dataCurrent) => {
        setDataCurrent(dataCurrent);
        console.log("dataRealTimeCurrent:", dataCurrent);
      });
    }, []);

    const [dataRealTimeActivePowerL1, setDataPower] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeActivePowerL1', (dataPower) => {
        setDataPower(dataPower);
        console.log("dataRealTimeActivePower:", dataPower);
      });
    }, []);

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Voltaje Circuitor - Linea 1 en Tiempo Real"
            subtitle="Este grafica muestra los valores de voltaje registrados por el Circuitor en la linea 1"
            sideText="Volts"
            sideTextcolor= '#D93D04'
          />
          <CustomLineChart 
        chartData={dataRealTimeVoltageL1}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#D93D04'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente Circuitor - Linea 1 en Tiempo Real"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor en la linea 1"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
      <CustomLineChart 
        chartData={dataRealTimeCurrentL1}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F27405'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Activa - Linea 1 en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor en la linea 1"
            sideText="kWatts"
            sideTextcolor= '#F29F05'
          />
        <CustomLineChart 
        chartData={dataRealTimeActivePowerL1}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F29F05'/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPL1T;
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';



type Props = {}

  
const GraphsVCPL2T = (props: Props) => {

    const [dataRealTimeVoltageL2, setDataVoltage] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeVoltageL2', (dataVoltage) => {
        setDataVoltage(dataVoltage);
        console.log("dataRealTimeVoltage", dataVoltage);
      });
    }, []);
  
    const [dataRealTimeCurrentL2, setDataCurrent] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeCurrentL2', (dataCurrent) => {
        setDataCurrent(dataCurrent);
        console.log("dataRealTimeCurrent:", dataCurrent);
      });
    }, []);

    const [dataRealTimeActivePowerL2, setDataPower] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeActivePowerL2', (dataPower) => {
        setDataPower(dataPower);
        console.log("dataRealTimePower:", dataPower);
      });
    }, []);

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Voltaje Circuitor - Linea 2 en Tiempo Real"
            subtitle="Este grafica muestra los valores de voltaje registrados por el Circuitor en la linea 2"
            sideText="Volts"
            sideTextcolor= '#D93D04'
          />
          <CustomLineChart 
        chartData={dataRealTimeVoltageL2}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#D93D04'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente Circuitor - Linea 2 en Tiempo Real"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor en la linea 2"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
      <CustomLineChart 
        chartData={dataRealTimeCurrentL2}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F27405'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Activa - Linea 2 en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor en la linea 2"
            sideText="kWatts"
            sideTextcolor= '#F29F05'
          />
        <CustomLineChart 
        chartData={dataRealTimeActivePowerL2}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F29F05'/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPL2T;
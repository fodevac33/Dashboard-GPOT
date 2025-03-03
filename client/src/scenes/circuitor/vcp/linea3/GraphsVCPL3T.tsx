import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';



type Props = {}

  
const GraphsVCPL3T = (props: Props) => {

    const [dataRealTimeVoltageL3, setDataVoltage] = useState([]);

    useEffect(() => {
      socket.on('dataRealTimeVoltageL3', (dataVoltage) => {
        setDataVoltage(dataVoltage);
        console.log("dataRealTimeVoltage", dataVoltage);
      });
    }, []);
  
    const [dataRealTimeCurrentL3, setDataCurrent] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeCurrentL3', (dataCurrent) => {
        setDataCurrent(dataCurrent);
        console.log("dataRealTimeCurrent:", dataCurrent);
      });
    }, []);

    const [dataRealTimeActivePowerL3, setDataPower] = useState([]);
  
    useEffect(() => {
      socket.on('dataRealTimeActivePowerL3', (dataPower) => {
        setDataPower(dataPower);
        console.log("dataRealTimePower:", dataPower);
      });
    }, []);

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Voltaje Circuitor - Linea 3 en Tiempo Real"
            subtitle="Este grafica muestra los valores de voltaje registrados por el Circuitor en la linea 3"
            sideText="Volts"
            sideTextcolor= '#D93D04'
          />
          <CustomLineChart 
        chartData={dataRealTimeVoltageL3}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#D93D04'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente Circuitor - Linea 3 en Tiempo Real"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor en la linea 3"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
      <CustomLineChart 
        chartData={dataRealTimeCurrentL3}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F27405'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Activa - Linea 3 en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor en la linea 3"
            sideText="kWatts"
            sideTextcolor= '#F29F05'
          />
        <CustomLineChart 
        chartData={dataRealTimeActivePowerL3}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke='#F29F05'/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPL3T;
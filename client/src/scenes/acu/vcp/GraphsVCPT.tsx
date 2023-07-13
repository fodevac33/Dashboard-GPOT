import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";


type Props = {}



const GraphsVCPT = (props: Props) => {


    const [dataRealTimeVoltage, setDataVoltage] = useState([]);
    const {palette} = useTheme();

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
            sideTextcolor= {palette.primary[100]}
          />
      <CustomLineChart 
          chartData={dataRealTimeVoltage}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.primary[100]}
          animation = {false}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de corriente registrados por el ACU"
            sideText="Amps"
            sideTextcolor= {palette.primary[200]}
          />
      <CustomLineChart 
          chartData={dataRealTimeCurrent}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.primary[200]}
          animation = {false}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia ACU en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de potencia registrados por el ACU"
            sideText="Watts"
            sideTextcolor= {palette.primary[300]}
          />
      <CustomLineChart 
          chartData={dataRealTimePower}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.primary[300]}
          animation = {false}/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPT;

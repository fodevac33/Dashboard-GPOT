import CustomLineChart from '@/components/CustomLineChart';
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
      <CustomLineChart 
        chartData={dataRealTimeImportedEnergy}
        xAsisDatakey='time'
        yAsisDatakey='imported'
        stroke = '#98D936'
        animation = {false}/>
        
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#4ABF2A'
          />
      <CustomLineChart 
          chartData={dataRealTimeExportedEnergy}
          xAsisDatakey='time'
          yAsisDatakey='exported'
          stroke = '#4ABF2A'
          animation = {false}/>
         
    </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#D7F205'
          />
      <CustomLineChart 
          chartData={dataRealTimeNetEnergy}
          xAsisDatakey='time'
          yAsisDatakey='net'
          stroke = '#D7F205'
          animation = {false}/>
           
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#84D98A'
          />
      <CustomLineChart 
          chartData={dataRealTimeTotalEnergy}
          xAsisDatakey='time'
          yAsisDatakey='total'
          stroke = '#84D98A'
          animation = {false}/>
           
      
      </DashboardBox>

  </>
  )
}

export default GraphsEnergiesT;

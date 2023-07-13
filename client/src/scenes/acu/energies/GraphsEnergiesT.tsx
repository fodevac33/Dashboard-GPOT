import CustomLineChart from '@/components/CustomLineChart';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import socket from '@/state/socket';
import React, { useState, useEffect } from 'react';
import {useTheme} from "@mui/material";



type Props = {}

const GraphsEnergiesT = (props: Props) => {
    const {palette} = useTheme();
    
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
            sideTextcolor={palette.secondary[200]}
          />
      <CustomLineChart 
        chartData={dataRealTimeImportedEnergy}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke = {palette.secondary[200]}
        animation = {false}/>
        
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[300]}
          />
      <CustomLineChart 
          chartData={dataRealTimeExportedEnergy}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.secondary[300]}
          animation = {false}/>
         
    </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[400]}
          />
      <CustomLineChart 
          chartData={dataRealTimeNetEnergy}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.secondary[400]}
          animation = {false}/>
           
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total en Tiempo Real"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[500]}
          />
      <CustomLineChart 
          chartData={dataRealTimeTotalEnergy}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke = {palette.secondary[500]}
          animation = {false}/>
           
      
      </DashboardBox>

  </>
  )
}

export default GraphsEnergiesT;

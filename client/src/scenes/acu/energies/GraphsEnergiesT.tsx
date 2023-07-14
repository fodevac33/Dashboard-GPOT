import socket from '@/state/socket';
import React, { useState, useEffect } from 'react';
import GraphEnergyPowerComponent from '@/components/GraphEnergyPowerComponent';


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
      <GraphEnergyPowerComponent importedEnergyOrInductivePower={dataRealTimeImportedEnergy}
      exportedEnergyOrCapacitivePower={dataRealTimeExportedEnergy}
      netEnergyOrApparentPower={dataRealTimeNetEnergy}
      totalEnergyOrPowerFactor={dataRealTimeTotalEnergy}
      titleAddition='en Tiempo Real'/>
    </>
  )
}

export default GraphsEnergiesT;

import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import GraphVCPComponent from '@/components/GraphVCPComponent';


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
     <GraphVCPComponent dataVoltage={dataRealTimeVoltageL1}
      dataCurrent={dataRealTimeCurrentL1}
      dataPower={dataRealTimeActivePowerL1}
      device='Circuitor'
      titleTime='- Linea 1 en Tiempo Real'/>

  </>
  )
}

export default GraphsVCPL1T;
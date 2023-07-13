import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import GraphVCPComponent from '@/components/GraphVCPComponent';



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
      <GraphVCPComponent dataVoltage={dataRealTimeVoltageL3}
      dataCurrent={dataRealTimeCurrentL3}
      dataPower={dataRealTimeActivePowerL3}
      device='Circuitor'
      titleTime='- Linea 3 en Tiempo Real'/>
  </>
  )
}

export default GraphsVCPL3T;
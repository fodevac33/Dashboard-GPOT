import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import GraphVCPComponent from '@/components/GraphVCPComponent';




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
      <GraphVCPComponent dataVoltage={dataRealTimeVoltageL2}
      dataCurrent={dataRealTimeCurrentL2}
      dataPower={dataRealTimeActivePowerL2}
      device='Circuitor'
      titleTime='- Linea 2 en Tiempo Real'/>
  </>
  )
}

export default GraphsVCPL2T;
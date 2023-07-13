import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import GraphVCPComponent from '@/components/GraphVCPComponent';


type Props = {}



const GraphsVCPT = (props: Props) => {


    const [dataRealTimeVoltage, setDataVoltage] = useState([]);

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
    <GraphVCPComponent dataVoltage={dataRealTimeVoltage}
    dataCurrent={dataRealTimeCurrent}
    dataPower={dataRealTimePower}
    titleTime='en Tiempo Real'
    />
  </>
  )
}

export default GraphsVCPT;

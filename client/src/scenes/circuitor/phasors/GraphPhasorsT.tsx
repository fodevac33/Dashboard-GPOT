import DashboardBox from '@/components/DashboardBox';
import BasicTable from '@/components/BasicTable';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';
import PhasorsGraph from '@/components/PhasorsGraph';



type Props = {}

  
const GraphPhasorsT = (props: Props) => {

  interface DataPhasor {
    value: number;
    time: number;  
  }

  const [dataRealTimePhasors1, setDataPhasors] = useState<DataPhasor[]>([]);;
    useEffect(() => {
      socket.on('dataRealTimePhasors1', (dataPhasors) => {
        setDataPhasors(dataPhasors);
        console.log("dataRealTimePhasors", dataPhasors);
      });
    }, []); 

    const [dataRealTimePhasors2, setDataPhasors2] =  useState<DataPhasor[]>([]);;
    useEffect(() => {
      socket.on('dataRealTimePhasors2', (dataPhasors2) => {
        setDataPhasors2(dataPhasors2);
        console.log("dataRealTimePhasors", dataPhasors2);
      });
    }, []); 

    const [dataRealTimePhasors3, setDataPhasors3] =  useState<DataPhasor[]>([]);;
    useEffect(() => {
      socket.on('dataRealTimePhasors3', (dataPhasors3) => {
        setDataPhasors3(dataPhasors3);
        console.log("dataRealTimePhasors", dataPhasors3);
      });
    }, []); 

    
    const getLastValue = (array: DataPhasor[]) => {
      if (array.length === 0) {
        return 0; 
      }
      return parseFloat(array[array.length-1].value.toFixed(3))*-1;
    }

    const angles = [0, getLastValue(dataRealTimePhasors2), getLastValue(dataRealTimePhasors2)+getLastValue(dataRealTimePhasors3)];
    const angles2 = [20, 110, 250];    

  function createData(
    L1: number,
    L2: number,
    L3: number,
    x: string,
  ) {
    return { L1,L2,L3,x };
  }

  const rows = [
    createData( 120.8 , 121.9, 121.7, "Vmod"),
    createData( 0.29, 0.19, 0.00, "Amod"),
  ];
  const rowNames = ["L1", "L2", "L3"];

  const rows2 = [
    createData( getLastValue(dataRealTimePhasors1)*-1 , getLastValue(dataRealTimePhasors2)*-1, getLastValue(dataRealTimePhasors3)*-1, "V"),
    createData( -102.6 , -163.3, -94.0, "I"),
  ];
  const rowNames2 = ["L1-L2", "L2-L3", "L3-L1"];

  const rows3 = [
    createData( angles2[0], angles2[1], angles2[2], "") 
  ];
  
  return (
    <>
    <DashboardBox gridArea="a">
      <PhasorsGraph angles={angles} angles2={angles2}/>
    </DashboardBox>

    <DashboardBox gridArea="b">     
      <div style={{ margin: '9px', marginBottom: '10px'}}>
      <BasicTable rows={rows} rowNames={rowNames} color={true} VI={true}/>
      </div>
      <div style={{ margin: '9px', marginBottom: '10px' }}>
      <BasicTable rows={rows2} rowNames={rowNames2} color={false} VI={true} title={"Ángulo entre fases"}/>
      </div>
      <div style={{ margin: '9px', marginBottom: '10px' }}>
      <BasicTable rows={rows3} rowNames={rowNames} color={true} VI={false}  title={"Ángulo V-I"}/>
      </div>
    </DashboardBox>

  </>
  )
}

export default GraphPhasorsT;

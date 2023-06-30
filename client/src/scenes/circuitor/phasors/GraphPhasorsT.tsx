import DashboardBox from '@/components/DashboardBox';
import BasicTable from '@/components/BasicTable';
import { VictoryChart, VictoryPolarAxis,VictoryTheme, VictoryBar } from 'victory';
import React, { useState, useEffect } from 'react';
import socket from '@/state/socket';



type Props = {}

  
const GraphPhasorsT = (props: Props) => {

  const [dataRealTimePhasors1, setDataPhasors] = useState([]);
    useEffect(() => {
      socket.on('dataRealTimePhasors', (dataPhasors) => {
        setDataPhasors(dataPhasors);
        console.log("dataRealTimePhasors", dataPhasors);
      });
    }, []); 

    const [dataRealTimePhasors2, setDataPhasors2] = useState([]);
    useEffect(() => {
      socket.on('dataRealTimePhasors2', (dataPhasors2) => {
        setDataPhasors2(dataPhasors2);
        console.log("dataRealTimePhasors", dataPhasors2);
      });
    }, []); 


  const directionsKeys = dataRealTimePhasors1;
  const valuesdirections = directionsKeys.map(String);

  const directions = directionsKeys.reduce((obj, key, index) => {
    obj[key] = valuesdirections[index];
    return obj;
  }, {} as { [key: number]: string });

  const directions2Keys = dataRealTimePhasors2;
  const valuesdirections2 = directions2Keys.map(String);

  const directions2 = directions2Keys.reduce((obj, key, index) => {
    obj[key] = valuesdirections2[index];
    return obj;
  }, {} as { [key: number]: string });
  
  const colors = ["#FF0A0A","#4FDC04","#3498DB"];

  let index = 0;

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
    createData( -119.1 , -120.4, -120.3, "V"),
    createData( -102.6 , -163.3, -94.0, "I"),
  ];
  const rowNames2 = ["L1-L2", "L2-L3", "L3-L1"];

  const rows3 = [
    createData( -26.2 , -42.8, 0.0, "")
  ];
  
  return (
    <>
    <DashboardBox gridArea="a">
    <VictoryChart
        polar
        animate={{ duration: 500, onLoad: { duration: 500 } }}
        theme={VictoryTheme.material}
        domain={{ y: [0, 2] }}
      >
        <VictoryPolarAxis
          dependentAxis
          labelPlacement="vertical"
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => ""}
        />

        <VictoryPolarAxis
          labelPlacement="parallel"
          tickValues={Object.keys(directions).map(Number)}
          tickFormat={Object.values(directions)}
          style={{ tickLabels: { fill: "white" } }}
        />

        <VictoryPolarAxis
          labelPlacement="parallel"
          tickValues={Object.keys(directions2).map(Number)}
          tickFormat={Object.values(directions2)}
          style={{ axis: { stroke:"gray" }, tickLabels: { fill: "white" }  }}
        />
    
        <VictoryBar
          style={{
            data: { width: 5, fill: () => {
              const color = colors[index % colors.length];
              index += 1;
              return color;
            }},
            labels: { fontSize: 10},
            
          }}
          data={directionsKeys.map((direction) => ({
            x: direction,
            y: 2
          }))}
          cornerRadius={{ topLeft: 4, topRight: 4 }}
          labels={() => ""}
        />

        <VictoryBar
          style={{
            data: { width: 7, fill: () => {
              const color = colors[index % colors.length];
              index += 1;
              return color;
            }},
            labels: { fontSize: 10 }
          }}
          data={directions2Keys.map((direction) => ({
            x: direction,
            y: 1
          }))}
          cornerRadius={{ topLeft: 4, topRight: 4 }}
          labels={() => ""}
        />


      </VictoryChart>
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
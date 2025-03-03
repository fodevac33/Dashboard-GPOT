import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BasicTable from '@/components/BasicTable';
import PhasorsGraph from '@/components/PhasorsGraph';


type Props = {}

  
const GraphPhasors = (props: Props) => {

  const angles = [0, 119.86, 240.36];
  const angles2 = [26.2, 161.86, 240.36];

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
        <PhasorsGraph angles={angles} angles2={angles2}  />
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

export default GraphPhasors;
import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}

  
const GraphsVCP = (props: Props) => {


  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    voltage: item.voltage,
  }));

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Potencia Reactiva Inductiva - Linea 1"
            subtitle="Este grafica muestra los valores de potencia reactiva inductiva registrados por el Circuitor"
            sideText="kvar"
            sideTextcolor= '#98D936'
          />
          <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#98D936'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Potencia Reactiva Capacitiva - Linea 1"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor"
            sideText="Amps"
            sideTextcolor= '#4ABF2A'
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#4ABF2A'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Aparente - Linea 1"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor"
            sideText="kVA"
            sideTextcolor= '#D7F205'
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#D7F205'/>
    </DashboardBox>

    <DashboardBox gridArea="d">
      <BoxHeader
            title="Factor de potencia - Linea 1"
            subtitle="Este grafica muestra los ultimos valores de factor de potencia registrados por el Circuitor"
            sideText="PF"
            sideTextcolor= '#84D98A'
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#84D98A'/>
    </DashboardBox>

  </>
  )
}

export default GraphsVCP;
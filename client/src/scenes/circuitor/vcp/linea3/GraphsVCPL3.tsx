import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}

  
const GraphsVCPL3 = (props: Props) => {


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
            title="Voltaje Circuitor - Linea 3"
            subtitle="Este grafica muestra los valores de voltaje registrados por el Circuitor en la linea 3"
            sideText="Volts"
            sideTextcolor= '#D93D04'
          />
          <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#D93D04'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente Circuitor - Linea 3"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor en la linea 3"
            sideText="Amps"
            sideTextcolor= '#F27405'
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#F27405'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Activa - Linea 3"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor en la linea 3"
            sideText="kWatts"
            sideTextcolor= '#F29F05'
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#F29F05'/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPL3;
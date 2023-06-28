import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';


type Props = {}
  
const GraphsEnergies = (props: Props) => {

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
            title="Energía Importada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#98D936'
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke = '#98D936'/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#4ABF2A'
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke= '#4ABF2A'/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#D7F205'
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke='#D7F205'/>
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor='#84D98A'
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

export default GraphsEnergies;
import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";

type Props = {}

  
const GraphsVCPL2 = (props: Props) => {

  const {palette} = useTheme();
  const {data} = useGetAcuVoltagesQuery();
  console.log('data:', data);
  const chartData = data?.map(item => ({
    time: item.time,
    value: item.value,
  }));

  return (
    <>
      <DashboardBox gridArea="a">
      <BoxHeader
            title="Voltaje Circuitor - Linea 2"
            subtitle="Este grafica muestra los valores de voltaje registrados por el Circuitor en la linea 2"
            sideText="Volts"
            sideTextcolor= {palette.primary[100]}
          />
          <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.primary[100]}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Corriente Circuitor - Linea 2"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor en la linea 2"
            sideText="Amps"
            sideTextcolor= {palette.primary[200]}
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.primary[200]}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Activa - Linea 2"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor en la linea 2"
            sideText="kWatts"
            sideTextcolor= {palette.primary[300]}
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.primary[300]}/>
      </DashboardBox>

  </>
  )
}

export default GraphsVCPL2;
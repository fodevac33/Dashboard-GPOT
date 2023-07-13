import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";


type Props = {}

  
const GraphsPowerL1 = (props: Props) => {

  const {palette} = useTheme();
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
            sideTextcolor= {palette.secondary[200]}
          />
          <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[200]}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Potencia Reactiva Capacitiva - Linea 1"
            subtitle="Este grafica muestra los valores de corriente registrados por el Circuitor"
            sideText="Amps"
            sideTextcolor= {palette.secondary[300]}
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[300]}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Potencia Aparente - Linea 1"
            subtitle="Este grafica muestra los ultimos valores de potencia activa registrados por el Circuitor"
            sideText="kVA"
            sideTextcolor= {palette.secondary[400]}
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[400]}/>
    </DashboardBox>

    <DashboardBox gridArea="d">
      <BoxHeader
            title="Factor de potencia - Linea 1"
            subtitle="Este grafica muestra los ultimos valores de factor de potencia registrados por el Circuitor"
            sideText="PF"
            sideTextcolor= {palette.secondary[500]}
          />
        <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[500]}/>
    </DashboardBox>

  </>
  )
}

export default GraphsPowerL1;
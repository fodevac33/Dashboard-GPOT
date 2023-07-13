import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { useGetAcuVoltagesQuery } from '@/state/api';
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";


type Props = {}
  
const GraphsEnergies = (props: Props) => {

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
            title="Energía Importada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[200]}
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke = {palette.secondary[200]}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title="Energía Exportada"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[300]}
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[300]}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title="Energía Neta"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[400]}
          />
      <CustomLineChart 
        chartData={chartData}
        xAsisDatakey='time'
        yAsisDatakey='voltage'
        stroke={palette.secondary[400]}/>
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title="Energía Total"
            subtitle="Este grafica muestra los ultimos valores de voltaje registrados por el ACU"
            sideText="Watts"
            sideTextcolor={palette.secondary[500]}
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

export default GraphsEnergies;
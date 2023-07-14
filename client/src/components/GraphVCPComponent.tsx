import React from 'react'
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';

type Props = {
    dataVoltage: {
        time: number;
        value: number;
    }[]| null,
    dataCurrent:{
      time: number;
      value: number;
    }[]| null,
    dataPower:{
      time: number;
      value: number;
    }[]| null,
    device?: string,
    titleTime?: string,

}

const GraphVCPComponent = ({dataVoltage, dataCurrent, dataPower,titleTime, device = "ACU"}: Props) => {
    const {palette} = useTheme();
  
    return (
      <>
        <DashboardBox gridArea="a">
        <BoxHeader
              title={`Voltaje ${device}${titleTime ? " " + titleTime : ""}`}
              subtitle={`Este grafica muestra los ultimos valores de voltaje registrados por el ${device}`}
              sideText="Volts"
              sideTextcolor= {palette.primary[100]}
            />
            <CustomLineChart 
          chartData={dataVoltage}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke={palette.primary[100]}/>
      </DashboardBox>
  
      <DashboardBox gridArea="b">
        <BoxHeader
              title={`Corriente ${device}${titleTime ? " " + titleTime : ""}`}
              subtitle={`Este grafica muestra los ultimos valores de corriente registrados por el ${device}`}
              sideText="Amps"
              sideTextcolor= {palette.primary[200]}
            />
        <CustomLineChart 
          chartData={dataCurrent}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke={palette.primary[200]}/>
        </DashboardBox>
  
      <DashboardBox gridArea="c">
        <BoxHeader
              title={`Potencia ${device === "Circuitor" ? "Activa " : ""}${device}${titleTime ? " " + titleTime : ""}`}
              subtitle={`Este grafica muestra los ultimos valores de potencia registrados por el ${device}`}
              sideText="Watts"
              sideTextcolor= {palette.primary[300]}
            />
          <CustomLineChart 
          chartData={dataPower}
          xAsisDatakey='time'
          yAsisDatakey='value'
          stroke={palette.primary[300]}/>
        </DashboardBox>
  
    </>
    )
}

export default GraphVCPComponent;
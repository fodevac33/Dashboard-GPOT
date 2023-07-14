import React from 'react';
import DashboardBox from '@/components/DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import CustomLineChart from '@/components/CustomLineChart';
import {useTheme} from "@mui/material";


  type Props = {
    device?: string;
    titleAddition?: string;
    importedEnergyOrInductivePower: {
        time: number;
        value: number;
    }[]| null,
    exportedEnergyOrCapacitivePower:{
      time: number;
      value: number;
    }[]| null,
    netEnergyOrApparentPower:{
      time: number;
      value: number;
    }[]| null,
    totalEnergyOrPowerFactor:{
      time: number;
      value: number;
    }[]| null,
  };
  

const GraphEnergyPowerComponent = ({device="ACU", importedEnergyOrInductivePower,
    exportedEnergyOrCapacitivePower, 
    netEnergyOrApparentPower,
    totalEnergyOrPowerFactor,
    titleAddition}: Props) => {

    const {palette} = useTheme();

    let titles: { [key: string]: string } = {};
    let units: { [key: string]: string } = {};

    if (device === "ACU"){
        titles={
            titleA: "Energía Importada",
            titleB: "Energía Exportada",
            titleC: "Energía Neta",
            titleD: "Energía Total",
        };
        units = {
            unitA: "Watts",
            unitB: "Watts",
            unitC: "Watts",   
            unitD: "Watts",
        }
    }
    else{
        titles={
            titleA: "Potencia Reactiva Inductiva",
            titleB: "Potencia Reactiva Capacitiva",
            titleC: "Potencia Aparente",
            titleD: "Factor de potencia"
        };
        units={
            unitA: "kvar",
            unitB: "kvar",
            unitC: "kVA",   
            unitD: "PF"
        }
    }
  return (
    <>
    <DashboardBox gridArea="a">
      <BoxHeader
            title= {titles[`titleA`] + `${titleAddition? " " + titleAddition: "" }`}  
            subtitle={`Este grafica muestra los ultimos valores de ${titles[`titleA`]} registrados por el ${device}`}
            sideText={units[`unitA`]}
            sideTextcolor={palette.secondary[200]}
          />
      <CustomLineChart 
        chartData={importedEnergyOrInductivePower}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke = {palette.secondary[200]}/>
    </DashboardBox>

    <DashboardBox gridArea="b">
      <BoxHeader
            title= {titles[`titleB`] + `${titleAddition? " " + titleAddition: "" }`} 
            subtitle={`Este grafica muestra los ultimos valores de ${titles[`titleB`]} registrados por el ${device}`}
            sideText={units[`unitB`]}
            sideTextcolor={palette.secondary[300]}
          />
      <CustomLineChart 
        chartData={exportedEnergyOrCapacitivePower}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.secondary[300]}/>
      </DashboardBox>

    <DashboardBox gridArea="c">
      <BoxHeader
            title={titles[`titleC`] + `${titleAddition? " " + titleAddition: "" }`} 
            subtitle={`Este grafica muestra los ultimos valores de ${titles[`titleC`]} registrados por el ${device}`}
            sideText={units[`unitC`]}
            sideTextcolor={palette.secondary[400]}
          />
      <CustomLineChart 
        chartData={netEnergyOrApparentPower}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.secondary[400]}/>
      </DashboardBox>

      <DashboardBox gridArea="d">
      <BoxHeader
            title={titles[`titleD`] + `${titleAddition? " " + titleAddition: "" }`} 
            subtitle={`Este grafica muestra los ultimos valores de ${titles[`titleD`]} registrados por el ${device}`}
            sideText={units[`unitD`]}
            sideTextcolor={palette.secondary[500]}
          />
      <CustomLineChart 
        chartData={totalEnergyOrPowerFactor}
        xAsisDatakey='time'
        yAsisDatakey='value'
        stroke={palette.secondary[500]}/>
      </DashboardBox>
    </>
  )
}

export default GraphEnergyPowerComponent
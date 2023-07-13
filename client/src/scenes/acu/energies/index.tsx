import React from 'react';
import {useMediaQuery} from '@mui/material'
import GraphsEnergies from './GraphsEnergies';
import GraphsEnergiesT from  './GraphsEnergiesT';
import BoxTemplateGrid from '@/components/BoxTemplateGrid';
import FormControlTime from '@/components/FormControlTime';


const gridTemplateLargeScreens = `
    "a b"
    "c d"
`;

const gridTemplateSmallScreens= `
  "a"
  "b"
  "c"
  "d"
`;

const GridACUEnergies = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");
    return (
      <>
      <FormControlTime tiempo={tiempo} setTiempo={setTiempo} color="#98D936"/>
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens} 
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}>
        {tiempo === "Día" && <GraphsEnergies/>}
        {tiempo === "Día" && <GraphsEnergies/>}
        {tiempo === "Tiempo Real" && <GraphsEnergiesT/>}    
      </BoxTemplateGrid>
      </>
    )

}

export default GridACUEnergies;
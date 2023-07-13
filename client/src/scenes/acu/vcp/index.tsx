import React from 'react';
import {useMediaQuery } from '@mui/material'
import GraphsVCP from './GraphsVCP';
import GraphsVCPT from './GraphsVCPT'; 
import BoxTemplateGrid from '@/components/BoxTemplateGrid';
import FormControlTime from '@/components/FormControlTime';


const gridTemplateLargeScreens = `
    "a b"
    "c c"
`;

const gridTemplateSmallScreens= `
  "a"
  "b"
  "c"
`;

const GridACUVCP = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");

    return (   
      <>
      <FormControlTime tiempo={tiempo} setTiempo={setTiempo} color='#D93D04'/>
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens} 
      gridTemplateLargeScreens={gridTemplateLargeScreens} 
      gridTemplateSmallScreens={gridTemplateSmallScreens}>
        {tiempo === "Día" && <GraphsVCP/>}
        {tiempo === "Tiempo Real" && <GraphsVCPT/>}
      </BoxTemplateGrid>
      </> 
    )

}

export default GridACUVCP;
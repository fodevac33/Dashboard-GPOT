import React from 'react';
import { Box, useMediaQuery, useTheme} from '@mui/material'
import GraphsVCPL1 from './linea1/GraphsVCPL1';
import GraphsVCPL1T from './linea1/GraphsVCPL1T';
import GraphsVCPL2 from './linea2/GraphsVCPL2';
import GraphsVCPL2T from './linea2/GraphsVCPL2T';
import GraphsVCPL3 from './linea3/GraphsVCPL3';
import GraphsVCPL3T from './linea3/GraphsVCPL3T';
import BoxTemplateGrid from '@/components/BoxTemplateGrid';
import FormControlTime from '@/components/FormControlTime';
import FormControlLines from '@/components/FormControlLines';


const gridTemplateLargeScreens = `
    "a b"
    "c c"
`;

const gridTemplateSmallScreens= `
  "a"
  "b"
  "c"
`;

const GridCircuitorVCP = () => {
  const {palette} = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");
  const [linea, setLinea] = React.useState("L1");

    return (   
      <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <FormControlLines linea={linea} setLinea={setLinea}/>
      <FormControlTime tiempo={tiempo} setTiempo={setTiempo} color={palette.primary[100]} />
      </Box>
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens} 
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}>
        {tiempo === "Día" && linea === "L1" && <GraphsVCPL1/>}
        {tiempo === "Día" && linea === "L2" && <GraphsVCPL2/>}
        {tiempo === "Día" && linea === "L3" && <GraphsVCPL3/>}
        {tiempo === "Tiempo Real" && linea === "L1" && <GraphsVCPL1T/>}
        {tiempo === "Tiempo Real" && linea === "L2" && <GraphsVCPL2T/>}
        {tiempo === "Tiempo Real" && linea === "L3" && <GraphsVCPL3T/>}    
      </BoxTemplateGrid>
      </> 
    )

}

export default GridCircuitorVCP;
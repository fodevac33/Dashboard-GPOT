import React from 'react';
import { Box, useMediaQuery} from '@mui/material'
import GraphsPowerL1 from './linea1/GraphsPowerL1';
import BoxTemplateGrid from '@/components/BoxTemplateGrid';
import FormControlLines from '@/components/FormControlLines';
import FormControlTime from '@/components/FormControlTime';
import {useTheme} from "@mui/material";

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

const GridCircuitorPower = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");
  const [linea, setLinea] = React.useState("L1");
  const {palette} = useTheme();

    return (   
      <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControlLines linea={linea} setLinea={setLinea} />
        <FormControlTime tiempo={tiempo} setTiempo={setTiempo} color={palette.primary[400]}/>
      </Box>
      <BoxTemplateGrid isAboveMediumScreens={isAboveMediumScreens}
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}
      >
        {tiempo === "Día" && linea === "L1" && <GraphsPowerL1/>}    
      </BoxTemplateGrid>
      </> 
    )

}

export default GridCircuitorPower;
import { Box, useMediaQuery,FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react';
import GraphsVCPL1 from './linea1/GraphsVCPL1';
import GraphsVCPL1T from './linea1/GraphsVCPL1T';
import GraphsVCPL2 from './linea2/GraphsVCPL2';
import GraphsVCPL2T from './linea2/GraphsVCPL2T';
import GraphsVCPL3 from './linea3/GraphsVCPL3';
import GraphsVCPL3T from './linea3/GraphsVCPL3T';


const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "c c"
    "c c"
    "c c"
    "c c"
`;

const gridTemplateSmallScreens= `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
`;

const GridCircuitorVCP = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");
  const [linea, setLinea] = React.useState("L1");

    return (   
      <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box paddingLeft="1rem " sx={{ display: "flex", justifyContent: "flex-end"}}>
            <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' }}} >
            <InputLabel sx={{color:"white"}}>Linea</InputLabel>
            <Select
                value = {linea}
                label= "Linea"
                onChange={(e) => setLinea(e.target.value)} sx={{
                "& .MuiSelect-icon": { color: 'white' }, color:"white",
                }}>
                <MenuItem value="L1">L1</MenuItem>
                <MenuItem value="L2">L2</MenuItem>
                <MenuItem value="L3">L3</MenuItem>
                </Select>
            
            </FormControl>
        </Box>

        <Box paddingRight="1rem " sx={{ display: "block", justifyContent: "flex-start"}}>
            <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' }}} >
            <InputLabel sx={{color:"white"}}>Tiempo</InputLabel>
            <Select
                value = {tiempo}
                label= "Tiempo"
                onChange={(e) => setTiempo(e.target.value)} sx={{
                "& .MuiSelect-icon": { color: 'white' }, color:"white",
                }}>
                <MenuItem value="Día">Día</MenuItem>
                <MenuItem value="Semana">Semana</MenuItem>
                <MenuItem value="Mes">Mes</MenuItem>
                <MenuItem value="Tiempo Real">Tiempo Real</MenuItem>
                </Select>
            
            </FormControl>
        </Box>
      </Box>
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        p= "1rem"
        sx = {
          isAboveMediumScreens ?{
          gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(57px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
            maxWidth: "90px",
          }
        }
      >

        {tiempo === "Día" && linea === "L1" && <GraphsVCPL1/>}
        {tiempo === "Día" && linea === "L2" && <GraphsVCPL2/>}
        {tiempo === "Día" && linea === "L3" && <GraphsVCPL3/>}
        {tiempo === "Tiempo Real" && linea === "L1" && <GraphsVCPL1T/>}
        {tiempo === "Tiempo Real" && linea === "L2" && <GraphsVCPL2T/>}
        {tiempo === "Tiempo Real" && linea === "L3" && <GraphsVCPL3T/>}
      
      </Box>
      </> 
    )

}

export default GridCircuitorVCP;
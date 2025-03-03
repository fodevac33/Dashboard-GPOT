import { Box, useMediaQuery,FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import GraphsVCP from './GraphsVCP';
import GraphsVCPT from './GraphsVCPT'; 
import React from 'react';


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

const GridACUVCP = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");

    return (   
      <>
      <Box paddingRight="1rem " sx={{ display: "flex", justifyContent: "right"}}>
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

        {tiempo === "Día" && <GraphsVCP/>}
        {tiempo === "Tiempo Real" && <GraphsVCPT/>}
      
      </Box>
      </> 
    )

}

export default GridACUVCP;
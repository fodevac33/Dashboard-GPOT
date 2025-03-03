import { Box, useMediaQuery,FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import GraphPhasors from './GraphPhasors';
import GraphPhasorsT from './GraphPhasorsT';
import CustomPolarChart from './test';
import React from 'react';


const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    "a b"
    
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

const GridCircuitorFasores = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");

    return (   
      <>

            <Box paddingRight="2rem " sx={{ display: "flex", justifyContent: "right"}}>
            <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
                       "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: '#FF0A0A'}, "& label.Mui-focused": {
                          color: '#FF0A0A'
                },
              }} >
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
        p= "1rem 1rem 1rem 4rem"
        sx = {
          isAboveMediumScreens ?{
          gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(61px, 1fr))",
          gridTemplateAreas: gridTemplateLargeScreens,
          } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
            maxWidth: "90px",
          }
        }
      >

        {tiempo === "Día" && <GraphPhasors/>}
        {tiempo === "Tiempo Real" && <GraphPhasorsT/>}
        {tiempo === "Semana" && <CustomPolarChart/>}
      
      
      </Box>
      </> 
    )

}

export default GridCircuitorFasores;
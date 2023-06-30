import { Box, useMediaQuery,FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import GraphsPowerL1 from './linea1/GraphsPowerL1';
import React from 'react';


const gridTemplateLargeScreens = `
    "a b"
    "a b"
    "a b"
    "a b"
    "c d"
    "c d"
    "c d"
    "c d"
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

const GridCircuitorPower = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [tiempo, setTiempo] = React.useState("Día");
  const [linea, setLinea] = React.useState("L1");

    return (   
      <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box paddingLeft="1rem " sx={{ display: "flex", justifyContent: "flex-end"}}>
        <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: '#98D936'}, "& label.Mui-focused": {
            color: '#98D936'
          },
        }} >
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
        <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: '#98D936'}, "& label.Mui-focused": {
            color: '#98D936'
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

        {tiempo === "Día" && linea === "L1" && <GraphsPowerL1/>}
      
      </Box>
      </> 
    )

}

export default GridCircuitorPower;
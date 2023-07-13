import React from 'react';
import { Box,FormControl, InputLabel, Select, MenuItem} from '@mui/material'

type Props = {
    tiempo: string,
    setTiempo: (tiempo: string) => void,
    color: string,
}

const FormControlTime = ( {tiempo, setTiempo, color}: Props) => {
  return (
    <Box paddingRight="1rem " sx={{ display: "flex", justifyContent: "right"}}>
        <FormControl sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: 'white' },
         "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: color}, "& label.Mui-focused": {
            color: color
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
  )
}

export default FormControlTime;
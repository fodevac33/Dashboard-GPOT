import React from 'react'
import { Box,FormControl, InputLabel, Select, MenuItem } from '@mui/material'

type Props = {
    linea: string;
    setLinea: (linea: string) => void;
}

const FormControlLines = ({linea, setLinea}: Props) => {
  return (
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
  )
}

export default FormControlLines;
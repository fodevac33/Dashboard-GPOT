import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



type Props = {
  rows: Array<{ L1: number, L2: number, L3: number, x: string }>,
  rowNames : Array<string>,
  color: boolean,
  VI : boolean,
  title?: string

};  


const BasicTable = ({rows, rowNames, color, VI, title}: Props) => {
  return (
    // TODO: Make the table responsive
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320,'tr td, tr th': { border: 2}, backgroundColor: "#1e1f21"}} aria-label="simple table">
        <TableHead >
          <TableRow  >
            {title && <TableCell align="center" sx={{color:"#FFFFFF"}} colSpan={rowNames.length + 1}>{title}</TableCell>}
          </TableRow>
          <TableRow  >
            <TableCell align="center" sx={color === true ?{color:"#FF0A0A"}:{color:"#FFFFFF"}}>{rowNames[0]}</TableCell>
            <TableCell align="center" sx={color === true ?{color: "#4FDC04"}:{color:"#FFFFFF"}}>{rowNames[1]}</TableCell>
            <TableCell align="center" sx={color === true ?{color: "#3498DB"}:{color:"#FFFFFF"}}>{rowNames[2]}</TableCell>
            {VI && <TableCell align="center" sx={{color:"#FFFFFF"}}></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody sx= {{'tr td, tr th': {color: "#FFFFFF"}}}>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">
                {row.L1}
              </TableCell>
              <TableCell align="center">{row.L2}</TableCell>
              <TableCell align="center">{row.L3}</TableCell>
              {VI && <TableCell align="center">{row.x}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




type Props = {
  rows: Array<{ L1: number, L2: number, L3: number, x: string }>,
  rowNames : Array<string>,
  color: boolean,
  VI : boolean
};  


const BasicTable = ({rows, rowNames, color, VI}: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320, 'tr td, tr th': { border: 1}, backgroundColor: "#2d2d34"}} aria-label="simple table">
        <TableHead >
          <TableRow  >
            <TableCell align="center" sx={color === true ?{color:"#4FDC04"}:{color:"#FFFFFF"}}>{rowNames[0]}</TableCell>
            <TableCell align="center" sx={color === true ?{color: "#3498DB"}:{color:"#FFFFFF"}}>{rowNames[1]}</TableCell>
            <TableCell align="center" sx={color === true ?{color: "#FF0A0A"}:{color:"#FFFFFF"}}>{rowNames[2]}</TableCell>
            {VI && <TableCell align="center" sx={{color:"#FFFFFF"}}></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody sx= {{'tr td, tr th': {color: "#FFFFFF"}}}>
          {rows.map((row) => (
            <TableRow
            >
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
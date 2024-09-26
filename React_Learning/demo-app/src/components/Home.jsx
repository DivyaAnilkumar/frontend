import React from 'react';
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
    const rows = [{eid:"E01",name:"Diya",designation:"Marketing",location:"TVM"},
        {eid:"E02",name:"Maya",designation:"Finance",location:"Kollam"},
        {eid:"E03",name:"Hari",designation:"Marketing",location:"TVM"}]
  return (
<div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Location</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.eid}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
//     <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">Eid</th>
//         <th scope="col">Name</th>
//         <th scope="col">Department</th>
//         <th scope="col">Location</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">E101</th>
//         <td>Maya</td>
//         <td>Marketting</td>
//         <td>TVM</td>
//       </tr>
//       <tr>
//         <th scope="row">E102</th>
//         <td>Jacob</td>
//         <td>Finance</td>
//         <td>Kollam</td>
//       </tr>
//       <tr>
//         <th scope="row">E103</th>
//         {/* <td colspan="2">Larry the Bird</td> */}
//         <td>Diya</td>
//         <td>Frontend</td>
//         <td>Kochi</td>
//       </tr>
//     </tbody>
//   </table>
  )
}

export default Home
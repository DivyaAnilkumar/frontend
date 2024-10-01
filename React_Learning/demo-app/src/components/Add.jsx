import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Add = () => {
  const [employee, setEmployee]=useState({emp_id:'',empName:'',department:'',location:''})

  let fetchValue = (e) => {
    // console.log(e);
    //... - spread operator
    setEmployee({...employee,[e.target.name]:e.target.value})
  };
  let sendData = (e) => {
    console.log(employee);
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField name='emp_id' id="outlined-basic" label="E_id" variant="outlined" 
      // value={employee.emp_id} 
      onChange={fetchValue} /><br />
      <TextField name='empName' id="filled-basic" label="Name" variant="filled" 
      // value={employee.empName} 
      onChange={fetchValue} /><br />
      <TextField name='department' id="standard-basic" label="Department" variant="standard"
      //  value={employee.department}
        onChange={fetchValue}/><br />
      <TextField name='location' id="outlined-basic" label="Location" variant="outlined"
      // value={employee.location}
       onChange={fetchValue} /><br />
      
      <Button variant="contained" onClick={sendData}>Submit</Button>
      
   
    </Box>
  )
}

export default Add
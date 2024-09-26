import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="E_id" variant="outlined" /><br />
      <TextField id="filled-basic" label="Name" variant="filled" /><br />
      <TextField id="standard-basic" label="Designation" variant="standard" /><br />
      <TextField id="outlined-basic" label="Location" variant="outlined" /><br />
      
      <Button variant="contained">Submit</Button>
      
   
    </Box>
  )
}

export default Add
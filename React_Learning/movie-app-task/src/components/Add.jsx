import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Add = () => {
  return (
    
    <Box 
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    
    <TextField id="outlined-basic" label="MovieName" variant="outlined" /><br />
    <TextField id="outlined-basic" label="Category" variant="outlined" /><br />
    <TextField id="outlined-basic" label="Director" variant="outlined" /><br />
    <TextField id="outlined-basic" label="ReleaseYear" variant="outlined" /><br />
    <TextField id="outlined-basic" label="Language" variant="outlined" /><br />
    <Button variant="contained">Submit</Button>
    
  </Box>
  )
}

export default Add
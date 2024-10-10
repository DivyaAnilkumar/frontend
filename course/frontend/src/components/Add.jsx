import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Add = () => {
  return (
    <div>
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="id" variant="outlined" /><br />
      <TextField id="outlined-basic" label="name" variant="outlined" /><br />
      <TextField id="outlined-basic" label="category" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="description" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="duration" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="fee" variant="outlined" /><br />
      
    </Box>
    </div>
  )
}

export default Add
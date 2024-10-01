import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  //setcount -set manager
  //count,setCount-variable
  //hooks-useState,useNavigate,useEffect,

  const [count, setCount] = useState(0)//hooks in react - to help track the state of a variable,

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Counter" variant="outlined" value={count} /><br />
      {/* <p>Count: {count}</p> */}
      
      
      <Button onClick={incrementCount} variant="contained">Increment</Button>
      <Button onClick={decrementCount} variant="contained">Decrement</Button>
      
   
    </Box>
    </>
  )
}

export default App

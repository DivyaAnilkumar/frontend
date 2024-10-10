import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
function App() {
  const [count, setCount] = useState(0)
  // const navigate = useNavigate()
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course
          </Typography>

          <Link to="/"><Button variant="contained" >Home</Button></Link>
          <Link to="/add"><Button  variant="contained" >Add</Button></Link>
          {/* <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
          <Button color="inherit" onClick={()=>navigate('/add')}>Add</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    <br />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
    </Routes>
    </>
  )
}

export default App
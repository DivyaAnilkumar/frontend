import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

// import MenuIcon from '@mui/icons-material/Menu';
 //routes define the routing outlet

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <br />
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>

    </Routes>
    
    {/* <Home/>
    <br />
    <Add/> */}
    

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Movie Details</h2>
      <Home/>
      <br />
      <h2>Add Movie Details</h2>
      <Add/>
    </>
  )
}

export default App

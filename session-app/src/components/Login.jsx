import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user , setUser]=useState({
        username:'',
        password:''
    })
    const navigate=useNavigate()
    let updateUser=(e)=>{
            setUser({...user,[e.target.name]:e.target.value})
    }
    let sendData=()=>{
        if ((user.username=="admin" )&&(user.password=="123")) {
            localStorage.setItem("username","admin"); //method to store value in variable
            navigate('/dashboard');

        }
        else alert("Invalid credentials")

    }
  return (
    <>
    <div>Login</div>
    <br />
    <TextField
          required
          id="outlined-required"
          label="Username"
          name="username"
          value={user.username}
          onChange={updateUser}
          />
     <br/>
     <br />
     <TextField
          required
          id="outlined-required"
          label="Password"
          type="Password"
          name="password"
          value={user.password}
          onChange={updateUser}
          />

          <br />
          <br />
    <Button variant="contained" onClick={sendData} >Submit</Button>

    
</>
    
  )
}

export default Login
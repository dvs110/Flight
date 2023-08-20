import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import './Delete.css'
const Delete = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
      email: undefined,
      password: undefined
  })

  const handleChange = (e) => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
      e.preventDefault()
      try {
          console.log(credentials);

          const res = await axios.post("/delete", credentials);
          console.log(res.data);

          if (res.data === 0) {

              console.log("invalid email");

              navigate("/err", { state: { name: 'invalid email', linkie: 'http://localhost:3000/delete' } })
          }
          else if (res.data === 1) {

              console.log("successfully deleted");
              navigate("/")
          }
          else if (res.data === 2) {
              console.log("invalid password");
              navigate("/err", { state: { name: 'invalid password', linkie: 'http://localhost:3000/delete' } })
          }
      }
      catch (err) {
          navigate("/delete")
      }
  }
  return (
    <>
     <div className="outer-div">
<div className="signup-div">
{/* <h1 style={{ color:"red",'fontFamily':"Roboto",marginLeft:"8rem"}}>Delete Page</h1> */}
     <Container>
     {/* <div className="header-div"> */}
     <h1 className='heading'>Delete Page</h1>
  {/* </div> */}
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id='email'
          label="Email"
          placeholder='enter your email name'
          onChange={handleChange}
          
        />
        <TextField
        required
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder='enter password'
           onChange={handleChange}
        />
        <div className="button-div">
<Button className="btn-delete" variant="primary" onClick={handleClick}>Delete</Button>
</div>
</div>
</Box>
</Container>
</div>
</div>
    </>
  )
}

export default Delete
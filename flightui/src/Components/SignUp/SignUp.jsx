import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import getDate from '../Date'
import airportData from '../airportData'
import airportData1 from '../airportData1'
import './SignUp.css'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

  // ##################################################

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: undefined,
    name: undefined,
    password: undefined,
    date: undefined,
    airport: undefined,
    arrivalairport: undefined

  })
  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      console.log(credentials);
      const result = await axios.post("/verify", credentials);
      console.log(result);
      if (result.data === 0)
        navigate("/err", { state: { name: 'email already taken', linkie: 'http://localhost:3000' } })
      else {
        const res = await axios.post("/form", credentials);
        console.log(res.data);

        navigate("/")
      }
    }
    catch (err) {
      navigate("/err", { state: { name: 'wrong inputss', linkie: 'http://localhost:3000' } })
    }
  }

  return (
    <>
      <div className="outer-div">
        <div className="signup-div">
          <Container>
            <div className="header-div">
              <h1 style={{ 'fontFamily': "Roboto" }}>Sign up</h1>
            </div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              textAlign="center"
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
                  id="name"
                  label="Name"
                  placeholder='enter your name'
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
                <input type="date" name="date" id="date" min={getDate()} onChange={handleChange} />

                <select name="airport" id="airport" onChange={handleChange} className="select-btn" defaultValue={""} required>
                  {airportData.map((data) => (
                    <option key={data.value} value={data.value} disabled={data.disabled} >
                      {data.label}
                    </option>
                  ))}
                </select>
                <select name="arrivalairport" id="arrivalairport" onChange={handleChange} className="select-btn" required>
                  {airportData1.map((data) => (
                    <option key={data.value} value={data.value} disabled={data.disabled}  >
                      {data.label}
                    </option>
                  ))}
                </select>

              </div>
            </Box>
            <div className="button-div" style={{ textAlign: 'center' }}>
              <Button className="btn " variant="primary" onClick={handleClick}>Submit</Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SignUp
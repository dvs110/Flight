import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import getDate from '../Date'
import airportData from '../airportData'
import airportData1 from '../airportData1'
import './Update.css'

const Update = () => {
  let res = null;

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({

    date: undefined,
    airport: undefined,
    arrivalairport: undefined


  })
  const [data, setdata] = useState(5)
  const [cred, setCred] = useState({
    email: undefined,
    password: undefined,

  })
  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const handleChange1 = (e) => {
    setCred(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const handleClick = async (e) => {
    e.preventDefault()
    try {

      // console.log(credentials);
      const result = await axios.post("/verify", cred);
      // console.log(result);
      if (result.data === 1) { navigate("/err", { state: { name: 'not found', linkie: 'http://localhost:3000/update' } }) }
      setdata(0)

    }
    catch (err) {
      navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000/update' } })
    }
  }
  const handleClick1 = async (e) => {
    e.preventDefault()
    try {
      let op = { ...cred, ...credentials }
      res = await axios.post("/update", op);
      navigate("/");
    }
    catch (err) {
      navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000/update' } })
    }
  }
  return (
    <>
      <div className="outer-div">
        <div className="signup-div">
          <Container>
            <h1 className='heading'>Update Page</h1>
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
                  onChange={handleChange1}

                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='enter password'
                  onChange={handleChange1}
                />
                {data === 0 && <>
                  <TextField
                    required
                    id="name"
                    label="Name"
                    placeholder='enter your name'
                    onChange={handleChange}

                  />
                  <input type="date" name="date" id="date" min={getDate()} onChange={handleChange} />

                  <select name="airport" id="airport" onChange={handleChange} className="select-btn" defaultValue={""} required>
                    {airportData.map((data) => (
                      <option key={data.value} value={data.value}   >
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <select name="arrivalairport" id="arrivalairport" onChange={handleChange} className="select-btn" required>
                    {airportData1.map((data) => (
                      <option key={data.value} value={data.value}   >
                        {data.label}
                      </option>
                    ))}
                  </select>
                  <div className="button-div">
                    <Button className="btn-update" variant="primary" onClick={handleClick1}>Update</Button>
                  </div>
                </>
                }
                <div className="button-div">
                  {data === 5 && <Button className="btn-update" variant="primary" onClick={handleClick}>Update</Button>}
                </div>
              </div>
            </Box>
          </Container>

        </div>
      </div>
    </>
  )
}

export default Update
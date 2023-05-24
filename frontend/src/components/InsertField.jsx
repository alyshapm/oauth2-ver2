import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifield.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router";
import { UserContext } from "../Auth";
import { useState, useContext } from "react";


function InsertField() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/login", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div className="insertfield">
          <Box 
            sx={{ width: '100%' }}
            onSubmit={handleSubmit}
          >
            <h1>Login</h1>
            <h3>Welcome! Login to your account to get started.</h3>
          
            <Stack spacing={2}>
              <TextField id="username" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
              <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              <Button variant="contained" sx={{ width: '100%' }} type="submit">Login</Button>
            </Stack>
            <p>New user? <a href='/'>Sign up</a></p>
          </Box>
    </div>
  )
}

export default InsertField
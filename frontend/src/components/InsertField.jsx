import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifield.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router";
import { fetchToken, setToken } from "../Auth";
import { useState } from "react";


function InsertField() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if ((username == "") & (password == "")) {
      return;
    } else {
      // make api call to our backend. we'll leave thisfor later
      axios
        .post("http://localhost:5173/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.token, "response.data.token");
          if (response.data.token) {
            setToken(response.data.token);
            navigate("/landing");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <div className="insertfield">
       {fetchToken()? (
          <h3>You are logged in</h3>
        ):(
          <Box 
            sx={{ width: '100%' }}
          >
            <h1>Login</h1>
            <h3>Welcome! Login to your account to get started.</h3>
          
            <Stack spacing={2}>
              <TextField id="username" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
              <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
              <Button variant="contained" sx={{ width: '100%' }} onClick={login}>Login</Button>
            </Stack>
            <p>New user? <a href='/'>Sign up</a></p>
          </Box>
         )}
    </div>
  )
}

export default InsertField
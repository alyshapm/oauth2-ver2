import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifield.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";


function InsertField() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password }, { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' } });
      const token = response.data.access_token; // Assuming the token field is "access_token"
      localStorage.setItem('token', token);
      navigate('/landing'); // Redirect to the profile page after successful login
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="insertfield">
      <form onSubmit={login}> {/* Add form element and set onSubmit attribute */}
        <Box sx={{ width: '100%' }}>
          <h1>Login</h1>
          <h3>Welcome! Login to your account to get started.</h3>
        
          <Stack spacing={2}>
            <TextField id="username" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" sx={{ width: '100%' }} type="submit">Login</Button>
          </Stack>
          <p>New user? <Link to="/">Sign up</Link></p> {/* Use React Router's Link component */}
        </Box>
      </form>
    </div>
  )
}

export default InsertField
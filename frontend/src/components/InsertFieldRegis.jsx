import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifieldregis.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from 'axios';

import ErrorMessage from "./ErrorMessage";

function InsertFieldRegis() {
  const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/signup',
        { email, full_name, password }, // Include the "password" field in the request payload
        { headers: { 'content-type': 'application/json' } }
      );
      const token = response.data.access_token; // Assuming the token field is "access_token"
      localStorage.setItem('token', token);
      navigate('/landing'); // Redirect to the profile page after successful

    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmationPassword && password.length > 5) {
      signup();
    } else {
      setErrorMessage(
        "Ensure that the passwords match and greater than 5 characters"
      );
    }
  };

  return (
    <div className="insertfieldr">
      <form onSubmit={handleSubmit}>
        <Box 
          sx={{ width: '100%' }}
        >
          <h1>Register</h1>
          <h3>Welcome! Register a new account to get started.</h3>
          <Stack spacing={2}>
            <TextField id="email" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/>
            <TextField id="full_name" label="Full name" variant="outlined" onChange={(e) => setFullName(e.target.value)}/>
            <TextField id="password" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            <TextField id="confirm-password" label="Confirm Password" variant="outlined" onChange={(e) => setConfirmationPassword(e.target.value)}/>
            <ErrorMessage message={errorMessage} />
            <Button variant="contained" type="submit">Register</Button>
          </Stack>
          <p>Already have an account? <a href='/login'>Login</a></p>
        </Box>
      </form>
    </div>
  )
}

export default InsertFieldRegis
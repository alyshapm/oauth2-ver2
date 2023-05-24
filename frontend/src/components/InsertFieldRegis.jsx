import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifieldregis.css'
import { Link } from 'react-router-dom';

function InsertFieldRegis() {
  return (
    <div className="insertfieldr">
      <Box 
        sx={{ width: '100%' }}
      >
        <h1>Register</h1>
        <h3>Welcome! Register a new account to get started.</h3>
        <Stack spacing={2}>
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="username" label="Username" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <TextField id="confirm-password" label="Confirm Password" variant="outlined" />
          <Button variant="contained">Register</Button>
        </Stack>
        <p>Already have an account? <a href='/login'>Login</a></p>
      </Box>
    </div>
  )
}

export default InsertFieldRegis
import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import '../styles/ifield.css'
import { Link } from 'react-router-dom';

function InsertField() {
  return (
    <div className="insertfield">
      <Box 
        sx={{ width: '100%' }}
      >
        <h1>Login</h1>
        <h3>Welcome! Login to your account to get started.</h3>
        <Stack spacing={2}>
          <TextField id="username" label="Username" variant="outlined" />
          <TextField id="password" label="Password" variant="outlined" />
          <Link to='/landing'>
          <Button variant="contained" sx={{ width: '100%' }}>Login</Button>
          </Link>
        </Stack>
        <p>New user? <a href='/'>Sign up</a></p>
      </Box>
    </div>
  )
}

export default InsertField
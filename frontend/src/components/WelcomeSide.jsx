import React from 'react'
import '../styles/wside.css'
import background from '../assets/login-bg.jpg'

function WelcomeSide() {
  return (
    <div className='welcome'
        style={{
            backgroundImage: `url(${background})`,
        }}
    >
      <div className='top'>
        <h2>L4BC - WADS Assignment</h2>
        <h3>Alysha, Dafa, Kimberly, Philip, Rachel</h3>
      </div>

      <div className='middle'>
        <h1>Welcome!</h1>
        <p>This is a full-stack implementation of
          OAuth2, JWT, Database, React, and Vite</p>
      </div>
      
      <div className='bottom'>
        <h4>Thank you for visiting!</h4>
      </div>
    </div>
  )
}

export default WelcomeSide
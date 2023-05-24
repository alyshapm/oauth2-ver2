import React from 'react'
import '../styles/wsideregis.css'
import background from '../assets/register-bg.jpg'

function WelcomeSideRegis() {
  return (
    <div className='welcomer'
        style={{
            backgroundImage: `url(${background})`,
        }}
    >
      <div className='topr'>
        <h2>L4BC - WADS Assignment</h2>
        <h3>Alysha, Dafa, Kimberly, Philip, Rachel</h3>
      </div>

      <div className='middler'>
        <h1>Welcome!</h1>
        <p>This is a full-stack implementation of
          OAuth2, JWT, Database, React, and Vite</p>
      </div>
      
      <div className='bottomr'>
        <h4>Thank you for visiting!</h4>
      </div>
    </div>
  )
}

export default WelcomeSideRegis
import React from 'react'
import '../styles/login.css'
import WelcomeSideRegis from '../components/WelcomeSideRegis'
import InsertFieldRegis from '../components/InsertFieldRegis'

function Register() {
  return (
    <div className="login">
      <div className="half left">
        <WelcomeSideRegis></WelcomeSideRegis>
      </div>

      <div className="half right">
        <InsertFieldRegis></InsertFieldRegis>
      </div>
    </div>
    )
}

export default Register
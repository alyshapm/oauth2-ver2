import React from 'react'
import '../styles/login.css'
import WelcomeSide from '../components/WelcomeSide'
import InsertField from '../components/InsertField'
import { useNavigate } from "react-router";
import { fetchToken } from "../Auth";

function Login() {
  return (
    <div className="login">
      <div className="half left">
        <WelcomeSide></WelcomeSide>
      </div>
  
      <div className="half right">
        <InsertField></InsertField>
      </div>
    </div>
    )
}

export default Login
import React from 'react'
import '../styles/login.css'
import WelcomeSide from '../components/WelcomeSide'
import InsertField from '../components/InsertField'
import { UserContext } from "../Auth";
import { useState, useContext } from "react";

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
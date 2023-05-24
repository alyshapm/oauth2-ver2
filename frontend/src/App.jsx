import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import { RequireToken } from "./Auth";


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/landing" element = { <RequireToken><Landing /></RequireToken>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

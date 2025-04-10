import { useState} from 'react'
import {  Routes, Route, } from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import List from './pages/List';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/portal' element={<Portal />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </>
  )
}

export default App

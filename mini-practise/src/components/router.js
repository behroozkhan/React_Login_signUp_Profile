import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register  from '../pages/register.js'
import Login from '../pages/login.js'
import Profile from '../pages/profile.js'
const RouterCom = () => {
  return (
   <div>
    <Routes>
        <Route  path='/' element={<Register/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/profile' element={<Profile/>} />
    </Routes>
   </div>
  )
}

export default RouterCom;
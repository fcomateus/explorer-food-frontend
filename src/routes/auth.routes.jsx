import { Routes, Route } from 'react-router-dom'

import { Signup } from '../pages/Signup'
import { SignIn } from '../pages/SignIn'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}
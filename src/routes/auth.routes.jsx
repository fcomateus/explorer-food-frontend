import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/Signup'
import { SignIn } from '../pages/SignIn'

//app routes
import { Home } from '../pages/Home'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}
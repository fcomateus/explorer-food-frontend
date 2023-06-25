import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-dish' element={<NewDish/>}/>
    </Routes>
  )
}
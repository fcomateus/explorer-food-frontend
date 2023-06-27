import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-dish' element={<NewDish/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  )
}
import React from 'react'
import { Route,Routes } from 'react-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/products' element={<Products />}></Route>
     </Routes>
    </div>
  )
}

export default AppRoutes

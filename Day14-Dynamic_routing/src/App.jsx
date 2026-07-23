import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router'

import AppRoutes from './routes/AppRoutes'


const App = () => {
  return (
    <div>

      <Navbar />
      <AppRoutes/>
    </div>
  )
}

export default App

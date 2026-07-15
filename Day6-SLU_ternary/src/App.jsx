import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {useState} from 'react'
const App = () => {

  const [toggle, setToggle] = React.useState()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {
      (toggle)?
      <Login setToggle={setToggle} />:
      <Register setToggle={setToggle} />
      }
    </div>
  )
}

export default App

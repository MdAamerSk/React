import React from 'react'
import Card from './components/Card'
import Contact from './components/Contact'
import About from './components/About'

const Web = () => {
  return (
    <div className='h-screen grid grid-cols-2 gap-4 bg-gray-200'>
      <h1>Web Page</h1>
      <Card />
      <Contact />
      <About />
    </div>
  )
}

export default Web

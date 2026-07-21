import React, { useContext } from 'react'
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { MyStore } from './context/MyContext'

const App = () => {

  let {count , setCount}  = useContext(MyStore);
  
  console.log("app rendering..")
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={()=>setCount(count +1)} >increment - {count}</button>
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App

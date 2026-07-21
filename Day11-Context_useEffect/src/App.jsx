import React, { useContext, useEffect, useState } from 'react'
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { ContextProvider, MyStore } from './context/MyContext'

const App = () => {

   let [count,setCount] = useState(0);
   let [toggle,setToggle] = useState(true);

      useEffect(()=>{
         console.log("app rendering..")
      },[])


  return (
    <div>
      
    <h1>Count is - {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>increment</button>
    <br />
    <button onClick={()=>setToggle(prev => !prev)}>Change Toggle State</button>

      {/*<ContextProvider>
        <Home />
        <About />
      </ContextProvider> */ }

        {
          toggle ?  <Contact /> : <About/>
        }
     
    </div>
  )
}

export default App

//A component inside a provider will re-render on a context update if and only if it consumes that context (via useContext).
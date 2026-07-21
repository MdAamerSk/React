import React, { useContext } from 'react'
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { ContextProvider, MyStore } from './context/MyContext'

const App = () => {

  let data = useContext(MyStore);
  console.log(data);
  console.log("app rendering..")

  return (
    <div>
      <ContextProvider>
        <Home />
        <About />
      </ContextProvider>

      <Contact />
    </div>
  )
}

export default App

//A component inside a provider will re-render on a context update if and only if it consumes that context (via useContext).
import React, { useState } from 'react'
import Contact from './component/Contact'
import Navbar from './Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'

const App = () => {

let [count,setCount]  = useState(0);
console.log("hey");
console.log(count)

  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      <h1>count-{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }} >increment</button>
    </div>
  )


}

export default App

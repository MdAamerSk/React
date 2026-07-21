import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Home = () => {
    console.log("home rendering...")
    let {count,setCount} = useContext(MyStore)
  return (
    <div>
      
        <h1>home</h1>
      <button onClick={()=>setCount(count +1)} >increment - {count}</button>
    </div>
  )
}

export default Home

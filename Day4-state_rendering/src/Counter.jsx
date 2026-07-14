import React from 'react'
import { useState } from 'react'

const Counter = () => {
  console.log("counter is rendering....")
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold">count is {count}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >Increment
      </button>
    </div>
  )
}


export default Counter;
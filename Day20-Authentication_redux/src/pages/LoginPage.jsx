import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue } from '../features/CounterSlice'
import { useState } from 'react'

const LoginPage = () => {

const [inpValue, setInpValue] = useState(0)

let dispatch = useDispatch() // dispatch is a function that is used to send actions to the store

let {count} = useSelector((store) => store.counter) // useSelector is a hook that is used to get the state from the store

  return (
    <div>
      <h1>Login Page</h1>
      <h1>count is {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
      <br />
      <br />
      <input type="number" placeholder="Enter a value" onChange={(e) => setInpValue(e.target.value)} />
      <button onClick={() => dispatch(incrementByValue(Number(inpValue)))}>add to count</button>
    </div>
  )
}

export default LoginPage

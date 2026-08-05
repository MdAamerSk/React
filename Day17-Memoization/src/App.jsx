import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Aamer Bidri", id: 789 });

  console.log("app rendering...");
  return (
    <div>
      <h1 className="text-3xl font-bold">
        memoization example,
        <br />
        count is : {count}
      </h1>

      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
        increment
      </button>
      <h2>Name is {users.name}</h2>
      <button onClick={() => setUsers({ ...users, name: "MD AAMER SHAIKH" })}>
        Change name{" "}
      </button>

      <Home users={users} />
      <About users={users} />
    </div>
  )
}

export default App

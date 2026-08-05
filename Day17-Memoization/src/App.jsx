import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { useState,useCallback,useMemo } from 'react'

const App = () => {

  let [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "Aamer Bidri", id: 789 });

  console.log("app rendering...");

  let calculation = useMemo(() => {
    console.log("calculation running....");
    let sum = 0;

    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [users]);

   let greet = useCallback(() => {
    console.log("good evening...");
  }, []);

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

      <h2>My calculation is {calculation}</h2>

      <h2>Name is {users.name}</h2>
      <button onClick={() => setUsers({ ...users, name: "MD AAMER SHAIKH" })}> {/*hamesha naye object ka reference jata hai */}
        Change name{" "}
      </button>

      <Home greet={greet} />
      <About greet={greet} />
    </div>
  )
}

export default App

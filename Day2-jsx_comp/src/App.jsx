import About from './About.jsx'
import React from 'react';

const App = ()=>{
  return (
    <div>
      <h1>hello</h1>
      <h2>byee</h2>
      <h3>vapus aao</h3>
      <About width="500" name="polo" age={90} element={<h1></h1>}/>
    </div>
  )
};

export default App;
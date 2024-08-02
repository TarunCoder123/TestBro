import React,{ useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);

  function handleI(){
    setCount(count+1);
  }

  function handleD(){
    setCount(count-1);
  }

  return (
    <div>
    <h1>{count}</h1>
    <br/>
    <button onClick={handleI}>+</button>
    <br/>
    <button onClick={handleD}>-</button>
    </div>
  )
}

export default App

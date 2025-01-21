import { useState } from 'react'
import './App.css'

function Counter(){
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  return(
    <>
        <div>Count: {count}</div>
        <button onClick={click}>Increment</button>
    </>
  )
}

function App() {
  return (
    <>
        <Counter />
        <Counter />
        <Counter />
    </>
  )
}

export default App
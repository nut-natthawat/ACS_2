import { useState } from 'react'
import './App.css'

function Plus({sum,setsum,value1,value2}){
  function click(){
    setsum(sum = value1+value2);
  }
  return(
    <button onClick={click}>Plus</button>
  )
}

function Minus({sum,setsum,value1,value2}){
  function click(){
    setsum(sum = value1-value2);
  }
  return(
    <>
        <button onClick={click}>Minus</button>
    </>
  )
}

function Multi({sum,setsum,value1,value2}){
  function click(){
    setsum(sum = value1*value2);
  }
  return(
    <button onClick={click}>Multi</button>
  )
}

function App(){
  const[sum, setsum] = useState(0);
  const value1 = 1;
  const value2 = 1;
  return(
    <>
      <h1>Calculator</h1>
      <Plus sum={sum} setsum= {setsum} value1 value2/>
      <Minus sum={sum} setsum= {setsum} value1 value2/>
      <Multi sum={sum} setsum= {setsum} value1 value2/>
      <div>have 3 and 5 sum = {sum}</div>
    </>
  )
}

export default App
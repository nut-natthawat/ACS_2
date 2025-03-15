import { useState, useEffect } from 'react';
import './App.css';

function Rerollbtr(){
  const [count, setCount] = useState(0);
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);
  const [dice3, setDice3] = useState(0);

  function Click(){
    setCount(count + 1);
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);  
    setDice3(Math.floor(Math.random() * 6) + 1);
  }

  return(
    <>
      <h1>Roll: {count}</h1>
      <button onClick={Click}>Re-roll</button>
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <h2 style={{border: '1px solid white', padding: '10px'}}>{dice1}</h2>
        <h2 style={{border: '1px solid white', padding: '10px'}}>{dice2}</h2>
        <h2 style={{border: '1px solid white', padding: '10px'}}>{dice3}</h2>
      </div>
    </>
  )
}


function App() {
  return(
    <>
      <Rerollbtr />
    </>

  )
}

export default App;

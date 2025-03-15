import { useState, useEffect } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import './App.css';

function Lockbtr(){
  const [lock, setLock] = useState(false);

  return(
    <button onClick={() => setLock(!lock)}>
      {lock ? <FaLock /> : <FaLockOpen/>} {lock ? 'Lock' : 'UnLock'}
    </button>
  )
}

function App() {
  return(
    <Lockbtr />
  )
}

export default App;

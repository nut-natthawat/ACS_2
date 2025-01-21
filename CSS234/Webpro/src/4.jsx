import { useState } from 'react';
import './App.css';

const list = [
  { title: "Feed the plants", isdone: false, id:1 },
  { title: "Water the dishes", isdone: false, id:2 },
  { title: "Clean the cat", isdone: false, id:3 },
];

function Showall({showall}) {
  return <button onClick={showall}>Show all</button>;
}

function Hidedone({hidedone}) {
  return <button onClick={hidedone}>Hide done</button>;
}

function Task({item,donetask}) {
  return (
    <ul>
      {item.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.isdone}
            onChange={() => donetask(item.id)}
          />
          <span style={{ textDecoration: item.isdone ? "line-through" : "none" }}>
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [item, setitem] = useState(list);
  const [showall, setshowall] = useState(true);

  const taskdone = (id) => {
    setitem(
      item.map((item) =>
        item.id === id ? { ...item, isdone: !item.isdone } : item
      )
    );
  };
  const clickshowall = () => {
    setshowall(true);
  };
  const clickhidedone = () => {
    setshowall(false);
  };
  const filter = showall ? item : item.filter((item) => !item.isdone);
  return (
    <>
      <Showall showall={clickshowall} />
      <Hidedone hidedone={clickhidedone} />
      <Task item={filter} donetask={taskdone} />
    </>
  );
}

export default App;

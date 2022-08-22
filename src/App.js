import { useState } from 'react';
import './App.css';

function App() {
  // const names = [
  //   { name: "Ramzan", position: "Job Holder" },
  //   { name: "Ramzan", position: "Job Holder" },
  //   { name: "Ramzan", position: "Job Holder" },
  //   { name: "Ramzan", position: "Job Holder" },
  //   { name: "Ramzan", position: "Job Holder" }
  // ];
  return (
    <div className="App">
      <Counter></Counter>
      {/* {
        names.map(name=><Person name={name.name} position={name.position}></Person>)
      } */}
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  }
  const decrease = () => {
    const newCount = counter - 1;
    setCounter(newCount);
  }
  return (
    <div>
      <p>Counter :{counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
// function Person(props) {
  
//   return (
//     <div className="person">
//       <h2>Name : {props.name}</h2>
//       <p>Position: {props.position}</p>
//     </div>
//   )
// }

export default App;

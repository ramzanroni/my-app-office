import { useEffect, useState } from 'react';
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
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
      {/* {
        names.map(name=><Person name={name.name} position={name.position}></Person>)
      } */}
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>External Users form API</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Email: { props.email}</p>
    </div>
  )
}
// function Counter() {
//   const [counter, setCounter] = useState(1);
//   const increase = () => {
//     const newCount = counter + 1;
//     setCounter(newCount);
//   }
//   const decrease = () => {
//     const newCount = counter - 1;
//     setCounter(newCount);
//   }
//   return (
//     <div>
//       <p>Counter :{counter}</p>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }
// function Person(props) {
  
//   return (
//     <div className="person">
//       <h2>Name : {props.name}</h2>
//       <p>Position: {props.position}</p>
//     </div>
//   )
// }

export default App;

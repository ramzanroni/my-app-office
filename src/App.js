import './App.css';

function App() {
  const names = [
    { name: "Ramzan", position: "Job Holder" },
    { name: "Ramzan", position: "Job Holder" },
    { name: "Ramzan", position: "Job Holder" },
    { name: "Ramzan", position: "Job Holder" },
    { name: "Ramzan", position: "Job Holder" }
  ];
  return (
    <div className="App">
      {
        names.map(name=><Person name={name.name} position={name.position}></Person>)
      }
    </div>
  );
}

function Person(props) {
  
  return (
    <div className="person">
      <h2>Name : {props.name}</h2>
      <p>Position: {props.position}</p>
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
const num = 45;
const player = {
  name: "Sakib Al hasan",
  age: 45
}
const musicStyle = {
  color : "gray",
  backgroundColor : "black",
  
}
function App() {
  return (
    <div className="App">
      <Person name = "ashraful" surName = "islam"></Person>
      <Person name="rubel" naika="xyz"></Person>
      <Friend></Friend>
      <Person></Person>
      <Friend></Friend>
      <Person></Person>
      <Friend></Friend>
      <Person></Person>
      <Friend></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
  <div className='person'>
    <h1>{props.name} {props.surName} {props.naika}</h1>
    <p>Profession: Cricket</p>
  </div>
  )
}

function Friend() {
  return (
    <div className='friend'>
      <h3>Name: Ajay</h3>
      <p>Job: maramari</p>
    </div>
  )
}
export default App;

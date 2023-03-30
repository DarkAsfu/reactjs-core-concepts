import logo from './logo.svg';
import './App.css';
const num = 45;
const player = {
  name: "Sakib Al hasan",
  age: 45
}
const singers = [
  {name: 'Ashraful Islam', id: 403}, 
  {name: 'Mardia Akter', id: 285},
  {name: 'Islam', id: 3}, 
  {name: 'Akter', id: 85}
];
const musicStyle = {
  color : "gray",
  backgroundColor : "black",
  
}
function App() {
  const vegetables = ['alo', 'fulkopi', 'badha kopi','potol','begun', 'misti kumra', 'tomato'];
  const friendNames = ['Ashraful', 'Mardia', 'Tauhidul', 'Samin', 'Farhan', 'Uccash']
  return (
    <div className="App">
      {/* {
        vegetables.map(vegetable => <li>Vegetable: {vegetable}</li>)
      } */}
      {
        vegetables.map(vegetable => <Person name={vegetable}></Person>)
      }
      {
        friendNames.map(friendName => <Friend name={friendName}></Friend>)
      }
      {
        singers.map(singer => <Person name={singer.name} id={singer.id}></Person>)
      }
      {/* <Person name = "ashraful" surName = "islam"></Person>
      <Person name="rubel" naika="xyz"></Person> */}
      {/* <Friend></Friend>
      <Person></Person>
      <Friend></Friend>
      <Person></Person>
      <Friend></Friend>
      <Person></Person>
      <Friend></Friend> */}
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
  <div className='person'>
    <h1>{props.name} {props.surName} {props.naika}</h1>
    <p>{props.id}</p>
  </div>
  )
}

function Friend(props) {
  return (
    <div className='friend'>
      <h3>Name: {props.name}</h3>
      <p>Job: maramari</p>
    </div>
  )
}
export default App;

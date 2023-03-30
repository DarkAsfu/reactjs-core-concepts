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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello JSX</h1>
         <div className="container">
          <h3>Hello dude react , How are you</h3>
         </div>
         <div className="music">
          <p style={musicStyle} >Name: {55+ num}</p>
          <p style={musicStyle} >Player name: {player.name}</p>
          <p style={{color : "gray", backgroundColor : "pink"}}>Age: {player.age}</p>
         </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

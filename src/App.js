import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import Greetings from "./Greetings";
import SayHello from "./SayHello";
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Fullstack Wed Development-1</h1>
          <h3>React JS Programming Week09 Lab Exercise</h3>
          <Welcome></Welcome>
            <SayHello fname ="Deep" lname="Patel"/>
            <Greetings></Greetings>
        </header>
      </div>
  );
}

export default App;
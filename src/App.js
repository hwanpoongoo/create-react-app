import logo from './logo.svg';
import './App.css';

const say = 'wow';

function App() {
  const name = "hwanpoongoo";

  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello {name} {say} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </>
  );
}

export default App;

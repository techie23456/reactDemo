import logo from './logo.svg';
import './App.css';
import About from './About';

function App() {
  return (
    <div className="MyApp">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* <About name="Ramesh" age ="24"/> */}
       <About />
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

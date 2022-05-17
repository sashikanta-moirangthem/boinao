import { ReactComponent as MyLogo } from "./logo.svg";
import Clock from "./Clock.js";
import Weather from "./Weather.js";
import "./App.css";
import Hello from "./Hello.js";
import Bca from "./Bca";
import Navbar from "./Navbar.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MyLogo className="App-logo" />
        <Hello />
        <Bca />
        <Clock />
        <Weather/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
  Learn React

        </a> */}

      </header>
    </div>
  );
}

export default App;

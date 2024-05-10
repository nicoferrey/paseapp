import logo from './logo.svg';
import './App.css';
import './fonts.css';
import Navbar from './Components/Navbar';
import InputField from './Components/InputFields/InputField';


function App() {
  return (
    <div>
      <Navbar />
        <InputField />
      

      {/*<div className="App">
      <header className="App-header">
        <InputField />
        <SignUp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit HOLAAA <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Weather, Weather2, Weather3 } from './Weather'; // import Weather.js这个App
import { Calculator } from './Calculator';

// this is function component
function App() {
  // define const here
  const name = 'AB'
  const myPStyle = {color: 'green', fontSize: '30px'}

  // return here, and it will render automatically
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='myH1'>
          Hello, {name}. This is my {1+2} react app(s).
        </h1>
        <p style={myPStyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* 使用 Weather.js 里面的 Weather function */}
        {/* 用 / 后，表示是一个元素 */}
        <Weather />
        <Weather2 />
        <Weather3 />
        {/* Calculator component */}
        <Calculator /> 
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

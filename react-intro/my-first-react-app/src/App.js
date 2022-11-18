import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
// import { Weather } from './Weather'; // import Weather.js这个App
import { Calculator } from './Calculator';
import { useState } from 'react';
import { Clock } from './Clock';

// this is a function component
function App() {
  // define const here
  const name = 'AB'
  const myPStyle = {color: 'green', fontSize: '30px'}
  // test to see if this App is rendered when refreshing in devtools console
  console.log('App')

  const [number, setNumber] = useState(0)

  // clock（子组件） 传给 App（父组件）的number2
  const [number2, setNumber2] = useState(null)
  // 跟孩子相连，setNumber2这个hook放到这个function里面
  const setNumber2Fun = (number) => {
    setNumber2(number)
  }


  // return here, and it will render automatically
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        <h1
          // onClick这里，加一个回调函数
          onClick={()=>(
            setNumber(number => number + 1)
          )}
          className='myH1'>
          Hello, {name} {number}. 
        </h1>
        <p style={myPStyle}>
          This is my 1st react app, {number2}.
        </p>
        {/* 使用 Weather.js 里面的 Weather function */}
        {/* 用 / 后，表示是一个元素 */}
        <Weather />
        <hr/>
        {/* <Weather2 /> */}
        {/* Calculator as a component */}
        {/* 将父组件的number，传给计算器后面，自定义变量dataFromApp */}
        <Calculator dataFromApp = {number}/> 
        <hr/>
        {/* 将 */}
        <Clock passDataFromChild = {setNumber2Fun} />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
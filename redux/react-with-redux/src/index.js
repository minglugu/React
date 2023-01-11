import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Provider component example
// store(state)
// create a store saved in the variable reduxStore which is used in store={reduxStore}
// 此处的reducers，就是songReducer，只是习惯用reducers，因为在reducers的index.js里面 是export default
const reduxStore = createStore(reducers) // 可以用来存reducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // 加一个provider component
    // 将store传给Provider
    // 类似于父传子的component的概念
    <Provider store={reduxStore}> 
      <App/>
    </Provider>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'; // middleware是redux自己带的一个功能
import reducers from './reducers';
import thunk from 'redux-thunk';

// Provider component example
// store(state)
// create a store saved in the variable reduxStore which is used in store={reduxStore}
// 此处的reducers，就是songReducer，只是习惯用reducers，因为在reducers的index.js里面 是export default
// thunk的源代码链接：https://github.com/reduxjs/redux-thunk
// As with connect(), you should start by wrapping your entire application 
// in a <Provider> component to make the store available throughout the component tree:
// URL: https://react-redux.js.org/api/hooks
const reduxStore = createStore(
  reducers,     // 可以用来存reducer
  applyMiddleware(thunk)      // 使用 thunk 的这个middleware. 在项目的根目录文件夹下的在terminal里面，输入 npm i redux-thunk
  ) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // 加一个provider component
    // 将store传给Provider
    // 类似于父传子的component的概念
    // What is Provider in Redux? See Readme,md file in this project
    // URL: https://react-redux.js.org/api/provider#:~:text=Overview%E2%80%8B,component%20tree%20inside%20of%20it.
    <Provider store={reduxStore}> 
      <App/>
    </Provider>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


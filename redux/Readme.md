Redux intro

3rd party library
e.g. Amazon Music Store - web-player（https://music.amazon.ca/）
HTML audio function
基于web，自己可以在网上，开发一个音乐播放器

React 有很多library/components，所以需要state management, one of them is redux,用来管理state。
state一改变，就会驱动网页刷新

Redux is used in React, Angular, Vue

Redux Core Principles: Store(states), actions, & reducer.

redux.js.org, 看tutorial：https://redux.js.org/tutorials/essentials/part-1-overview-concepts

steps of creating React project
1. in terminal, put command line 'npx create-react-app react-with-redux'     name is in lower case
    cd react-with-redux to get into the project folder
2. npm i redux
3. npm i react-redux


State(store), view, action
It is a self-contained app with the following parts:
The state, the source of truth that drives our app;
The view, a declarative description of the UI based on the current state
The actions, the events that occur in the app based on user input, and trigger updates in the state

Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.


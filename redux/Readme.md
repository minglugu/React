Redux intro

3rd party library
e.g. Amazon Music Store - web-player（https://music.amazon.ca/）
HTML audio function
基于web，自己可以在网上，开发一个音乐播放器

React 有很多library/components，所以需要state management, one of them is redux,用来管理state。
state一改变，就会驱动网页刷新

Redux is used in React, Angular, Vue

Redux Core Principles: Store(states), actions, & reducer.
concepts: State(store), view, actions
(reference link: https://www.pluralsight.com/guides/how-to-write-redux-reducer). Pls read this article carefully.
It explains how state changes triggering reducer function.
It is a self-contained app with the following parts:
1. state: the source of truth that drives our app. 
          (The state is an object that describes aspects of your application that can change over time. )
2. view: a declarative description of the UI based on the current state
3. actions: the events occur in the app based on user input, and trigger updates in the state. (aka: what happened)
4. reducer: a function that takes an action and the previous state of the application and returns the new state. 
   The reducer takes two parameters: state and action. You need to have an initial value so that when Redux calls the reducer for the first time with undefined, it will return the initialState. Then the function uses a switch statement to determine which type of action it's dealing with. If there is an unknown action, then it should return the state, so that the application doesn't lose its current state.

... is a spread syntax which is explained in the following link:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

How do action and reducer work together? 
The action describes what happened and it is the reducer's job to return the new state based on that action.


redux.js.org, 看tutorial：https://redux.js.org/tutorials/essentials/part-1-overview-concepts

steps of creating React project
1. in terminal, put command line 'npx create-react-app react-with-redux'     name is in lower case
    cd react-with-redux to get into the project folder
2. npm i redux
3. npm i react-redux




Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.


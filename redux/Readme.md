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

What is Provider component in Redux?
URL link: https://react-redux.js.org/api/provider#:~:text=Overview%E2%80%8B,component%20tree%20inside%20of%20it.
Overview​ The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.


redux.js.org, 看tutorial：https://redux.js.org/tutorials/essentials/part-1-overview-concepts

steps of creating React project
1. in terminal, put command line 'npx create-react-app react-with-redux'     name is in lower case
    cd react-with-redux to get into the project folder
2. npm i redux
3. npm i react-redux

Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

新建三个文件夹：点击UI上面的按钮以后，找到actions文件夹里面对应的action，再找到reducer更新。
actions:
components: UI
reducers

写code的流程：
1. components folder里，先写PlayConsole.js，此文件为 UI（用户界面）
2. actions folder里，再写各种action.js 文件. 将其中使用到的变量写到helper.js里面，从而避免拼写错误。
3. reducers folder里，写各种reducer.js的文件. 将其中使用到的变量写到helper.js里面，从而避免拼写错误。

chrome extension: Redux DevTools, React Extension, 但是不好用。

Dispatch的概念：https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

此时运行项目，会出现报错的情况。错误提示如下：
“Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
    at Object.throwInvalidHookError (react-dom.development.js:16227:1)
    at useContext (react.development.js:1618:1)
    at useReduxContext (useReduxContext.js:21:1)
    at useStore (useStore.js:17:1)
    at useDispatch (useDispatch.js:14:1)
    at onClick (PlayerConsole.js:21:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
    at invokeGuardedCallback (react-dom.development.js:4277:1)
    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:1)”

如何解决这个报错的问题：
1. 在项目的目录下，装redux-thunk 这个middleware：在 terminal 里面输入这个命令行：npm i redux-thunk
2. 在src/index.js 文件里，加入这行代码：applyMiddleware(thunk) 
3. 在actions/songActions.js 文件里，修改fetchAllSongs()这个function

总结：
1. 在src的index.js这个入口文件里，增加了reducers(给它托管) 和 applyMiddleware(thunk)
2. 在UI界面（PlayerConsole.js文件里面），useSelector 是从 store 里面，取state。
    useDispatcher，从store里面取action。当用户click，调用action。
3. 点击 “Fetch Songs” 这个button，（这个button在PlayerConsole.js文件里），就会触发
    fetchAllSongs() 这个function。这个function，会dispatch，用axios来获取歌单，赋值给payload。    在这里的例子里，初始的默认值打印出来的是空数组[]
4. 然后会触发reducer，找到初始值为[](songList:[]), 传进来的action，是FETCH_ALL_SONGS,
   然后return里面，修改原来的state(...state), 就会回到UI这里，刷新页面后，会获取到新的songList。然后会通过这一行代码(<p>{JSON.stringify(songList)}</p>)打印出歌单。

结合这个动图来看上面的流程：https://redux.js.org/tutorials/essentials/part-1-overview-concepts  在这个页面,搜索(ctrl+f)下面这句话，来找到动图。
Here's what that data flow looks like visually


作业：
1. 用fetch 或 axios，url就是 course-data.mark2win.com/solo/

2. render出来的东西，跟amazon相似。一行行的样子。dispatch selectSong，传id，改造reduder。
playerConsole增加p标签，songId 
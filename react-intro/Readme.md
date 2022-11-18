- software development model

- react documentation

- MVC (model, view, controller)
    https://developer.mozilla.org/en-US/docs/Glossary/MVC

- web development with more generated data, such YouTube, Zoom,  WeChat, etc.

- Front end and back end separation (new model: MVVM)
    - Angular (by Google, not a library, it is a platform, high cost for a small company)
              (typescript: strict with data type, for Bank employment) 30%
              such as Home Depot
    - Vue

    - React   (60%, fast by FaceBook) (Airbnb, Walmart, McDonald's) 
      MVVM: Model -> View View->Model: 数据驱动view(UI)的刷新，data drives update of UI。 

- React
  A JS library to create UIs using reusable components
  use virtual DOM to keep track of the change made to components (virtual DOM) 只重新render 内容改变的部分 
  e.g. https://weatherstack.com/
  该网页中，只改变天气预报那里的内容，不会刷新整个页面，增加了效率

  core feature:
  1. JSX syntax - JS XML
     similar to html syntax
     html     JSX
     - class -> className
     import './App.css'
     e.g. <header className="App"> </header>

     react logo can move on the web page
     because App.css has @media animation: App-logo-spin feature
     @keyframes App-logo-spin(定义名字) 以及
     from {} and to{}

     - can use JS variable / expression
     In App.js, 增加一个变量 const name = 'AB' 和 表达式 {2+2}

     - style, in-line style
     <p style={{color: 'blue'}}>
     double {{}}
     外层{} 变量
     里层{} object格式
     e.g.:
     const myPStyle = {color: 'green', fontSize: '30px'}
     用camel case 命名，e.g. fontSize
     <p style={myPStyle}>
     

  2. Virtual DOM
     React creates a virtual DOM in memory, where it does all the manipulation before making chagnes in the browser DOM

  3. Components (class vs function component)
     网页分成各个模块，可以分别开发，再组合，可以重复利用。
     reusable and modular pieces of codes
     https://reactjs.org/docs/thinking-in-react.html
     举例：分别做1-5的组件，然后拼接到一起
     https://weatherstack.com/ 在首页最底下，有6个小模块，内容类似，就做1个component，里面有icon，title，和对模块的描述
     将 component 命名为 card，接收传入的数据有 icon，title，content，弄好以后，传入数据即可
 

  4. React version 16.8.0
     Add Hooks(function components)   
     https://github.com/facebook/react/blob/main/CHANGELOG.md#1680-february-6-2019

     工作：class component -> 改成 function component

steps:
npx stands for Node Package Execute
1. terminal cmd line: npx create-react-app my-first-react-app
   下载各种包
   运行项目的 CLI
   cd project-name
   npm start

   取消 CLI：ctrl + C

   src folder下面
   - .gitignore: 内容很多，有些东西不被git更新，比如说/node_modules
   - package.json file，类似与object的格式。{"key":"value", "key":"value"}
     dependencies：里面有4个包，很关键。react， react-dom，react-scripts，web-vitals
     下载的dependencies 会在里面更新。下载以后，会存在node_modules 里面

    以下情况，如何处理。
    当 git clone 一个项目后，有可能node_modules这个folder不存在
    可以在terminal里面，进入项目的文件夹下面，输入 npm i
    会自动搜索dependencies，下载相关的modules。
    用webpack IDE，同时右键点击项目，选择Reload from Disk

    public folder: 
    放静态的文件
    index.html 对应的是平时开发写的 html 网页。其它东西是动态生成的
    在index.html中，引入 ionicons.com，就可以使用可爱的图标
    或者https://fontawesome.com/
    favicon.ico 是网页 左上角的logo
    
    src folder：
    入口是index.js 里面有很多语法。其中各个js文件，就是相关的component
    root.render(); in index.js, 所有的东西，都在这里面render 
    ctrl 点击render() 里面的 <App /> 就可以进入 App.js 文件，修改 function App() {}。里面的内容是 localhost:3000的sample page

- function App() is the function component
  it is a function called App, it has return() to return an html page. It has only 1 html tag. i.e. only 1 <div></div>, not two parallel div. But <div> can be nested.
  如果不想style 外层 div，可以将 <div></div> 写成 <></>

- 在 index.js中，render <App /> 两次，那么在页面中，当作html的一个element来用。这就是component 重复利用的概念。

- 自己创建一个component：src -> 右键新建一个file, component 文件名要uppercase。e.g. Weather.js

- export App的方法
   1. export const Weather = () => {}
   2. const Weather = () => {}
      write on the last line: export {Weather, Weather2, Weather3}

   3. "export default App;" in App.js
      pairs with
      import App from './App';
      用default，就不用{}
   
      每个文件只能用一个default，import default App的时候，就不用{}

- state and hook
   1. 新建一个component：Calculator.js 
   
   hooks-useState
   track data and property change, e.g. price change or weather change. A function updates the state
   设置成state，react会识别，自动刷新. Calcualte.js example

   在 App.js 里面，用 Calculator 的App
   在 Calculator 里面，增加一个 按钮

   useState as a hook to update myNumber

   2. useEffect() hook

   3. 不同的component之间，数据的传输
      先建立分支
      git checkout -b use-effect    // 新建一个分支
      git add .
      git commit -m"use effect intro"
      git branch --all    // 看里面有几个分支

   4. Google markdown cheatsheet
      to check README.md

   5. How is virtual DOM rendered?
      Only render the necessary component where the state(props) changes

   6. parent component re-render 会造成所有的子类component re-render（刷新）. 可以通过 console.log 打印 每个component的名字，在devtool的console里面可以看到。但是如果只是 child component re-render,不会影响其它component （面试问题之一，怎么增加performance）。尽量将各种component独立开来。不要将App作为Calculator的父亲。
   react.

   7. const [number, setNumber] = useState(0)
   Why does usestate use const?
   Because useState are immutable. On this case they using const because this is array destruction instead of defining variables.

   8. named export vs default export
      https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
      named export vs default export
      named export:
      export const Weather = () => {

      }

      default export
      export default Weather
      同时，在import 的文件里面，要写import { Weather } from './Weather';


   9. export default React.memo(Weather)   会在memo下面划线，需要import React from 'react';

   10. React.memo() method: https://reactjs.org/docs/react-api.html#reactmemo
       React.memo is a higher order component. 

       If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result(类似静态页面). This means that React will skip rendering the component, and reuse the last rendered result.
       
       React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, it will still rerender when state or context change.

       Hook API reference: https://reactjs.org/docs/hooks-reference.html#usememo

       这两个hook：useMemo, useCallback
       React.memo(useMemo, useCallback)
       面试问题：How do you boost/imporve a performance of your react project? How do you solve the re-rendering issue in react.
       useMemo: it returns a memoized value.

       回答此类面试问题：解释re-render概念, component 概念，memo概念，useMemo 和 useCallback 可以减少re-render的issue

   11. Three stages of React's component's lifecycle
       1. initialize/mounting 
       2. updating property/state
       3. unmounting/destruction (类似 destroy/close) e.g. 关闭弹出的广告
       
       面试问题：useLayoutEffect vs useEffect 
       useLayoutEffect fires synchonously after all DOM mutations. 
       更接近sync的状态. Measuring a box of sth or the width of a DOM component after a render occurs

       interviewing question：what is React’s component lifecycle.
       https://itnext.io/reacts-component-lifecycle-6c13e09d10ad

       见Component Lifecycle的图，里面都是class

       useEffect (callback function, [dependencies])  dependency是依赖，决定useEffect是否运行
       用于 side effects：
       1. timers (setInterval, setTimeout)-cleanup
       2. fetch data（根据taobao浏览习惯，list 商品信息），写在 userEffect 里面
       3. updating/measuring DOM: 计算render的东西有多大，点图标，做个购物车的特效动画，是从点击card的
          地方，再跳到购物车。需要measure长宽高，大小会变，用于responsive
       4. set/fetch/get value from your localStorage. load 界面的时候，从local storage存储的地方，拿到之
       前存储的数据。
       5. add event listener - clean up
          setInterval - clean up
       注意点：some effects need to be cleaned up to avoid memory leak。

       a)useEffect(func, [])
       when the dependency is empty[] = componentDidMount(). 只运行一次,先运行return，再运行useEffect
       刷新页面，只是render return里面的部分，而不是useEffect()

       b)useEffect(func)
       when there is no dependency = componentDidMount + componentDidUpdate
       不推荐此方法，因为每次刷新，都会render useEffect 部分。所以提问起，如何增加网页performance，那么
       在useEffect这个方法里面，增加dependency这个参数

       c)useEffect(func, [depend1, depend2...])
       when the dep is not empty, callback run is depending on the changes of dependencies

   12. set timeout, set interval的时候，要注意，最后需要clear，否则会造成内存泄露
       The best way in React to clear Timeouts and Intervals are by assinging ref to your interval/timeout functions which works flawlessly and use useRef () hook


create a new branch       
git checkout -b data-communication

## data communication
e.g. 目前有3个component（Clock, Calculator, and Weather to ） 和 parent component App
     父亲的数值怎么传给孩子，孩子之间怎么传，孩子怎么传出去
     举例，一个搜索框，输入城市名字，然后calculator的背景，就改成了搜索框里的城市的名字
     a) 父亲传给孩子(用props)
        Hello AB 后面的数值，传给Calculator，并放到后面
        操作步骤：
        1. 在App.js里面 function App() 的 <Calculator />里面，加入自定义变量，传入父元素的值
        <Calculator dataFromApp = {number}/> 
        2. 在Calculator.js 加入 props 这个形参（parameter）
            写法1. export const Calculator = (props) => {}
            写法2. export const Calculator = ({dataFromApp})
        3. 在return里面，加入{props.dataFromApp}. 其中props是Calculator的形参，dataFromApp是
        在App.js里面，Calculator 自定义的变量
        <h2>
            写法1.
            from App {props.dataFromApp}
            写法2. destruction 的写法
            from App {dataFromApp}
         </h2>

      b) 子传父（传一个function，这边的例子时）
         1. App.js
         // Clock（子组件） 传给 App（父组件）的number2
         const [number2, setNumber2] = useState(null)

         2. // App.js         
         // 跟孩子相连，setNumber2这个hook放到这个setNumber2里面
         const setNumber2Fun = (number) => {
           setNumber2(number)
         }
         3. // App.js
         <Clock passDataFromChild = {setNumber2Fun} />
         4. // Calculator.js
         export const Clock = ({passDataFromChild}) => { 
         }
            // 子传父
         passDataFromChild(number)

      summary: data communication
      1. parent component to child 
         - in parent componentpass argument to child : <ChildComponent paramName = {argument}/>
         - in child component, use it as an argument/parameter (prop.name) or {name}

      2. child to parent
         - in parent component, pass callback function to child in angle bracket: <ChildComponent name = {callback function}/>
         - in child component, use it as an argument/parameter (prop.name) or {name}
         to set the state of parentgit 

      3. child a to child b
         child a -> parent -> child b

check branches git CLI: git branch --all
switch branches: git checkout branchName

切换branch，code的内容会不同。

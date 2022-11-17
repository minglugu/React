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


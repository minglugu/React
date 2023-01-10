// 2015 new feature
let myObj = {
    name: 'AB',
    age: 24
}
let name2 = myObj.name

// object destruction
let {name} = myObj

## 创建新项目
npx create-react-app city-view-react

## input child 输入框里面，在display child里面显示搜索的城市图片
   1. 在parent app里面，建立一个新hook

definition: A callback is a function passed as an argument to another function. 

add plug-in to IDEA WebStorm by Intellij: vim, Rainbow Brackets, Indent Rainbow  

Definition: debounce react

React Hooks Course - All React Hooks Explained
YouTube link: https://www.youtube.com/watch?v=LlvBzyy-558&t=3440s
Tags:
- ReactJS Tutorial
- ReactJS and MySQL
- NodeJS Tutorial
- API Tutorial

Timestamps 
00:00 | Intro
01:41 | UseState 工作中常用
15:19 | UseReducer
27:12 | UseEffect 工作中常用
38:52 | UseRef
46:44 | UseLayoutEffect
52:49 | UseImperativeHandle
01:01:09 | UseContext
01:09:29 | UseMemo
01:18:55 | UseCallback
其它function需要了解，因为面试有可能会问

## SearchBarCityView.js
Problem: onChange() function will fetch every letter is typed into the input bar, causing 
the busy responses from a server. 
Solution: add another event onKeyDown after onChange code.

## Error: error:0308010C:digital envelope routines::unsupported
when writing axios.get()
https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/

solution: 
1. npm uninstall react-scripts
2. npm install react-scripts
"react-scripts": "^5.0.1" is updated

## use API of unsplash
https://www.pluralsight.com/guides/using-the-unsplash-api


## 子传父(SearchBarCityView.js -> App.js)
将SearchBarCityView.js拿到的用户数据，传给parent App.js

## carousel effect of images
code URL: https://dev.to/dhilipkmr/creating-a-cycliccarousel-3j16

## Arrow function expressions, URL from MDN web docs
URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## advanced version 增加的功能
1. 增加的功能
Input child 这个component，用来搜索城市或其它关键字(e.g. cat, dog)的名字

Display child 这个component，fetch之后，拿到了array，array里面有10个candidates(10个小图标)，放在整幅背景图的下面。再传数据给parent，点击小图标以后，会给parent传图片。

2. 做出的改变
   a) App.js: comment 不需要的 functions 和 const(无需删除，用来对比原来的版本，知道这些functions和const是怎么建立，父传子，子传父，子传子[子1 -> 父 -> 子2]的)
   b) SearchBarCityView.js:
      在这行代码 export const SearchBarCityView = ({updateCityImg}) 中，删除updateAName这个参数，因为在App.js里面，updateAName这个变量已经不存在了。 
      同理，comment 这行代码：updateAName(event.target.value) 
   c) DisplayCityView.js:
      删除 export const Display = () =>{} 里面的param，comment <button> 和 <p> 标签的内容
   d) SearchBarCityView.js 里面，增加了这个style：backgroundColor: ‘rgba(255, 255, 255, 0.5)’
      并且增加了这一行代码：useEffect(()=>{searchCity('toronto')}, [])
      是个callback function，()=>{searchCity('toronto')这个function放在useEffect() 这个 function 里面。
      意思是：当两个components都load完之后，因为useEffect里的dependencies为空，会运行useEffect，会call里面的searchCity(), 会获取新的图片(parent App.js里面的imgList状态发生变化)，造成re-render。

   e) 在App.js 里面，增加一个useEffect的callback function，将searchCity function作为参数放到useEffect里面。见line 21.

   f) 在输入框里，输入enter时，内容就全部选中。
      修改如下：
      1. 给SearchBarCityView的input标签，加个id='myInput'
      2. 在keyDownHandler里面，增加document.getElentById('#myInput')


   对useEffect()的说明，请见这篇博文。
   https://dmitripavlutin.com/react-useeffect-explanation/#:~:text=useEffect(callback%2C%20dependencies)%20is,being%20props%20or%20state%20values.



// 停止项目的运行的快捷键：ctrl + c     
// terminal里面，就会出现这个提示：Terminate batch job(Y/N)?


插曲：假如新建的branch（名字为newBranchName）未能实现功能，需要回到原来的branch上面，重新写code。操作如下：
如何删除newBranchName，重新在原来的branch上面，新建另外一个branch（version2Branch）
   git branch -D newBranchName          // 删除没有merge的branch
   git branch --all                     // 查看目前所有的branch
   git checkout -b anotherNewBranchName // create a branch

jsonviewer.stack.hu 
将SearchBarCityView.js，在devtools的console里面，复制10 个object，放在jsonviewer.stack.hu里的Text里面，再用Viewer查看
技术面试的时候，会考。类似的提问：(Viewer里的) data structure怎么改
在SearchBarCityView.js的 then() 里面，re-organize the data structure,返回的new results应该是数组类型。

功能：显示fetch的小品图标(thumb):
用array(imgList)来render 小图标。
在DisplayCityView.js里面，输入这一行：{imgList.map((item, index) => <img src={item.thumb} alt=""/>)}
不限于img，也可以自定义component，在页面上显示出自己写的东西

当imgList的thumb小图标，全部render到网页上。DisplayCityView.js里面，关键的是这几行代码，
起到了render小图标的作用。
{imgList.map((item, index) => <img 
   key={index}
   src={item.thumb} 
   alt=""/>)}


eventListener in React: 通常写法是inline的写法，不需要通过其它动态的方式来写。
URL: https://reactjs.org/docs/handling-events.html
1. 要在每个image上，加一个click事件，onClick(), 可以夹在map上，那么每个图片，就加上了onclick事件。
2. 


## 当新增DisplayCityView.scss文件的时候，运行项目，会发生错误。Cannot find module 'sass'
解决的办法：在terminal里面，输入cmd line:
npm i sass
装完以后，可以在package.json里面，
面试问题：什么是sass？SASS (Syntactically Awesome Style Sheets) is a pre-processor scripting language that will be compiled or interpreted into CSS。用来预处理css文件的。

## 此时的问题是：image还是比较杂乱，需要定义image的样式。CSCC

## Q: 当图片加载比较慢的时候，客户在等待search的结果的时候，要显示 loading 这个提示。
   A: 直到图片全部加载完毕，loading才消失。如何操作：state何时可以设置为 true 还是 false。true是render，false是还没有render。loading放在哪个元素里，loading可以单独作为一个component。

主要是useEffect and data communication这2个关键的概念。

还有 增加左箭头和右箭头，在 SearchCityView.js 这个地方需要改动。 


改进：user friendly.
生成环境怎么处理：
loading，产生的时效：从hit enter，到图片loading结束。用 && 来判断

先在 SearchBarCityView.js 里面 增加 isLoading 的component
isLoading 的初始值是 false
当keyDownHandler的key down了， 当用户输入信息，userInputName改变，将userInputName传入setInputName()，来update useState。就会激活useEffect(),
让searchCity()发生变化。searchCity 中的 axios，开始时，设置为true。
并在loading结束后，设置为false。
const searchCity = inputCity => {
   setIsLoading
}
        
额外补充的知识点：render 画面上，img lazy loading 的concept

------------------------------------------------------------------]
新建 city-view-advanced-loading-choose-page 
git checkout -b city-view-advanced-loading-choose-page 
加上一页和下一页，添加多页

DisplayCityView.js

unsplash documentation: https://unsplash.com/documentation#search-photos
parameters:
query	         Search terms.
page	         Page number to retrieve. (Optional; default: 1)
per_page	      Number of items per page. (Optional; default: 10)
order_by	      How to sort the photos. (Optional; default: relevant). Valid values are latest and relevant.
collections	   Collection ID(‘s) to narrow search. Optional. If multiple, comma-separated.
content_filter	Limit results by content safety. (Optional; default: low). Valid values are low and high.
color	         Filter results by color. Optional. Valid values are: black_and_white, black, white, yellow, orange, 
               red, purple, magenta, green, teal, and blue.
orientation	   Filter by photo orientation. Optional. (Valid values: landscape, portrait, squarish)

在axios里面，增加page这个parameter
axios.get(unsplashURL, {
            params: {
                // 将searchCity这个方法里面的形参,传入到query里面,
                // 就可以在keydown的时候,
                query: inputCity,
                orientation: 'landscape',
                page: 1
            },。。。

在项目里面，src里面，增加一个helper 这个 directory
再建一个 file called constants.js

知识点：the onload attribute fires when an object has been loaded. 
是一个event，类似于onclick
url: https://www.w3schools.com/tags/ev_onload.asp
可以做成淘宝的图片，单独每个图片有个loading的图标

基本完成功能了。需要改进的地方：
- css style
- alt 的description文字部分，可以做成animation：www.famer.com/motion/    这个库比较的popular

小细节方面的知识点：
使用 icon, font awesome

做项目的时候，封装：
1. 把相似的coding部分，比如说两个button，做成一个component，使用的时候，直接调用component。
   在src文件夹下，建一个PageButton.js, 用来写 PageButton 这个component
   写完button的label和style以后，如何将onClick这个function，传到previous 和 next 的 button上面？
2. 使用同一种功能，那就写成一个function，需要时调用。

除了在button上加文字外，还可以使用icon：ionic.io/ionicons 
使用时，在usage标题栏里面，copy script，然后加到项目里的 public文件夹下面的 index.html 文件里面。
然后在使用PageButton的时候，不传'next'这个名字，而是传icon。
<PageButton label={<ion-icon name="chevron-forward-outline"></ion-icon>} clickFun={nextPage}/>

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

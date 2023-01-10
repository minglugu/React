import logo from './logo.svg';
import './App.css';
import { SearchBarCityView } from './SearchBarCityView';
import { DisplayCityView } from './DisplayCityView';
import { useState } from 'react';

function App() {
  // the following const page, nextPage and updatePage are used to control which page comes first

  // line 13 和 19 是从SearchBarCityView.js 文件里面粘贴过来的。
  // 先定义page state, default is 1. 问题：如何将setPage 这个参数，传到 DisplayCityView.js 里面去？
  // 然后将page 这个 parameter 传给 SearchBarCityView.js，见line 77。然后到SearchBarCityView.js里，将page参数传入
  const [page, setPage] = useState(1)

  // 这里是通过父传子，来达到子传子(SearchBarCityView.js 传给 DisplayCityView.js)的操作。定义一个function called nextPage，
  // 定义nextPage这个function， 通过父 App.js传给child component DisplayCityView.js（line 100），
  // 就达到了 pass setPage to DisplayCityView.js 这个子传子的操作。传function的时候，就需要点击按钮，value需要加1，才能运行.
  // 此处写 ()=> 是因为没有传任何参数。
  const nextPage = () => setPage(value => (value + 1))
  // 还原 SearchBarCityView.js 中的 page 页码, 将它还原成 default value
  // 并将 updatePage 传到 SearcBarCityView 那里
  const updatePage = () => setPage(1) 

  // define previous page function. check if it is the first page value. 然后把prevPage传到button里
  const prevPage = () => page > 1 && setPage(value => (value - 1)) 

  // Declare a new state variable called "selectedIndex"
  // create a state to store the index of clicked image from child component
  // set the intial value to the element of 0 index
  const [selectedIndex, setSelectedIndex] = useState(0)
  // 传简单的参数，可以直接这么写。传object和array，用箭头函数写
  const updateIndex = value => setSelectedIndex(value)


  // const [name, setName] = useState(null)

  // create a state to store the selected index from child
  // hook 传给孩子，孩子更新后，调用updateImgList, 再调用 setImgList,然后父亲就可以用images了
  // 下面两行代码，用来更新获取到的 imgList
  // 因为imgList是空的array,所以初始值设为 []
  const [imgList, setImgList] = useState([])
  const updateImgList = value => setImgList(value)

  // setName 放到function updateName 里面
  // create a function to accept the value from child and set state(setName)
  // 传递child value的过程：child component的value，pass into function updateName()。
  // const updateName = (nameValue) => {
  //   // console.log(nameValue)
  //   setName(nameValue)
  // }

  // a function converts all letters to uppercase
  // const conversion = () => {
  //     setName(name => name.toUpperCase())
  // }

  return (
    <div className="App">
      {/* 引用search bar这个元素 */}
      {/* render的时候，用imgList.length !== 0 && 判断是否为空，否则会报错。 */}
      {/* {<h1></h1>}的大括号，是说明要写JSX */}
      {/* 将fetch到的image的des 打印到component上面。但是需要判断一下是否为空，
          (也就是说获取的 imgList 的长度是否为0) */}
      {imgList.length !== 0 && <h1>{imgList[selectedIndex].des}</h1>}
      {/* <p> {name} </p> */}

      {/* show imgList[], 是array，要JSON.stringify */}
      {/* 当在SearchBarCityView里，输入城市名字，就会传给parent，
          */}
      {/* <p>{JSON.stringify(imgList)}</p> */}

      {/* 随便取值的变量名字（props is passed as a parameter in child component）
      = {function for passing child value, the function is define at line 12} 
      then in SearchBar, updateAName param will be used as
      export const SearchBar = ({updateAName})*/}
      {/* <SearchBar updateAName = {updateName}/> */}
      <SearchBarCityView 
          // updateAName = {updateName}
          updateCityImg = {updateImgList}
          updateIndex = {updateIndex}    
          page = {page}
          // 将 updatePage 传给 SearchBarCityView.js (line 58)
          updatePage = {updatePage}
      />
      <hr/>
      {/* Parent component value is passed to child component
      e.g. {name} is parent component value, passing it to a variable newName in <Display /> here
      In Display, newName is taken as parameter  */}
      {/* <Display 
        newName = {name} 
        conversion = {conversion}  
      /> */}
      <DisplayCityView 
        // 父传子, 前面的imgList是自定义变量，作为DisplayCityView.js的参数，传进去。后面的{imgList}，
        // 是拿到的 parent component 的值。 
        imgList = {imgList} 
        // 父传子，传个function
        updateIndex = {updateIndex}
        // 通过父传子，达到子传子(SearchBarCityView to DisplayCityView)的作用。
        nextPage = {nextPage}
        prevPage = {prevPage}
      />
     {/* newName = {name} 
         conversionCityName = {conversion}   */}
      
      {/* 拿到搜索结果的第0个元素的URL, 需要加判断，是否为空。
          if imgList[] 是否为empty: imgList.length !== 0
          if imgList is an object, use !!imgList instead of imgList.length !== 0 to make sure the 
          object is not empty */}
      {imgList.length !== 0 && <img 
        id='displayCityView'       
        style = {{
          height: '100vh',
          width: '100',
          position: 'absolute'
        }} 

        src={imgList[selectedIndex].regular} alt={imgList[selectedIndex].des}/>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { SearchBarCityView } from './SearchBarCityView';
import { DisplayCityView } from './DisplayCityView';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(null)

  // create a state to store the results fetched by child
  // hook 传给孩子，孩子更新后，调用updateImgList, 再调用 setImgList,然后父亲就可以用images了
  // 下面两行代码，用来更新获取到的 imgList
  // 因为imgList是空的array,所以初始值设为 []
  const [imgList, setImgList] = useState([])
  const updateImgList = value => setImgList(value)

  // setName 放到function updateName 里面
  // create a function to accept the value from child and set state(setName)
  // 传递child value的过程：child component的value，pass into function updateName()。
  const updateName = (nameValue) => {
    // console.log(nameValue)
    setName(nameValue)
  }

  // a function converts all letters to uppercase
  const conversion = () => {
      setName(name => name.toUpperCase())
  }

  return (
    <div className="App">
      {/* 引用search bar这个元素 */}
      <h1>Parent:</h1>
      <p> {name} </p>

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
          updateAName = {updateName}
          updateCityImg = {updateImgList}/>
      <hr/>
      {/* Parent component value is passed to child component
      e.g. {name} is parent component value, passing it to a variable newName in <Display /> here
      In Display, newName is taken as parameter  */}
      {/* <Display 
        newName = {name} 
        conversion = {conversion}  
      /> */}
      <DisplayCityView 
        newName = {name} 
        conversionCityName = {conversion}  
      />
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
        src={imgList[0].urls.regular} alt=""/>}
    </div>
  );
}

export default App;

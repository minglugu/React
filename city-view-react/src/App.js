import logo from './logo.svg';
import './App.css';
import { SearchBar } from './SearchBar';
import { Display } from './Display';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(null)

  // setName 放到一个function里面
  // create a function to accept the value from child and set state(setName)
  // 传递child value的过程：child component的value，pass into function updateName()。
  const updateName = (nameValue) => {
    // console.log(nameValue)
    setName(nameValue)
  }

  return (
    <div className="App">
      {/* 引用search bar这个元素 */}
      <h1>Parent:</h1>
      <p> {name} </p>
      {/* 随便取值的变量名字（props is passed as a parameter in child component）
      = {function for passing child value, the function is define at line 12} 
      then in SearchBar, updateAName param will be used as
      export const SearchBar = ({updateAName})*/}
      <SearchBar updateAName = {updateName}/>
      <hr/>
      <Display/>
    </div>
  );
}

export default App;

// 1. 写法一：function based search bar, dustruction写法{updateAName}
//    updateAName 作为function，传进来。将用户输入的东西，实时传进去。
//    在input框里面，
// 2. 写法二：(props), when printing props using console.log, 
// props is an object. 

import { useState } from "react"

export const SearchBar = ({updateAName}) => {
    // console.log(updateAName)

    // 在Input child 下面也显示输入的内容
    // 1. 先定义useState hook
    const [name, setName] = useState(null)
    // 2. 在onClick里面, 定义setName
    // 3. 定义一个<p>，显示在Input child下面

    return (
        <div style={{border: '2px pink solid', width: '400px', height: '150px'}}>
            <label htmlFor="">Please input a name:  </label>
            <input 
                //加一个callback function onChange， 拿到input中，用户实时输入的数据
                onChange={event => {
                    // console.log(event.target.value) 
                    // 把input输入的值，传给父亲              
                    updateAName(event.target.value)
                    // 2. 在onClick里面, 定义setName
                    setName(event.target.value)
                }}
                type="text"/>
    
            <h3>Input Child</h3>
            {/* 3. 定义一个<p>，显示在Input child下面 */}
            <p> {name} </p>
        </div>
    )
}
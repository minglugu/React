// 1. 写法一：function based search bar, dustruction写法{updateAName}
//    updateAName 作为function，传进来。将用户输入的东西，实时传进去。
//    在input框里面，
// 2. 写法二：(props), when printing props using console.log, 
// props is an object. 

import axios from "axios"
import { useState } from "react"

const unsplashKey = 'cVWfiLOQxMydkNinizISK4yfjCh_3xmO7QvoIoLB8ZA'
const unsplashURL = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateAName, updateCityImg}) => {
    // console.log(updateAName)

    // 在Input child 下面也显示输入的内容
    // 1. 先定义useState hook
    const [name, setName] = useState(null)
    // 2. 在onClick里面, 定义setName
    // 3. 定义一个<p>，显示在Input child下面

    // clearn and obtain the input value when the Enter key is pressed down
    const keyDownHandler = event => {
        // print out "Enter" in the console
        console.log(event.key) 
        if (event.key === 'Enter') {
            // 减少后端的压力，将两侧的空白部分去掉。
            let userInputName = event.target.value.trim().toLowerCase()
            // call searchCity() function
            searchCity(userInputName)
        }
    }

    // define searchCity() function. (hoist, 所以可以定义在下面)
    // inputCity 是定义的变量，
    const searchCity = inputCity => {
        // console.log(inputCity)
        // fetch 方法,此处用第三方库，axiox是promise based HTTP client for the browser and node.js
        // npmjs.com/package/axios, cmd line: npm install axios
        // axios
        // https://api.unsplash.com/search/photos
        // client_id=${access_key}
        // &query=${searchCity}
        // &orientation=landscape
        // axios statement
        axios.get(unsplashURL, {
            params: {
                // 将searchCity这个方法里面的形参,传入到query里面,
                // 就可以在keydown的时候,
                query: inputCity,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${unsplashKey}` // 用backtick
            }
        })
        // 返回的promise
        .then(          
            res => {
                // console.log(res) 
                // 取出res的data的results,看devtool里面的 Console的打印结果
                // destructive nested object
                // let myResult = res.data.results
                // console.log(myResult)
                // 等同于下面的写法
                let {data: {results}} = res
                console.log(res)
                // 把父亲的imageList给填补上
                updateCityImg(results)
            }
        )
        .catch(err => console.log(err))       
    }
 
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

                // callback function onKeyDown
                onKeyDown={keyDownHandler} 

                type="text"/>
    
            <h3>Input Child</h3>
            {/* 3. 定义一个<p>，显示在Input child下面 */}
            <p> {name} </p>
        </div>
    )
}
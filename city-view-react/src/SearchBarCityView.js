// 1. 写法一：function based search bar, dustruction写法{updateAName}
//    updateAName 作为function，传进来。将用户输入的东西，实时传进去。
//    在input框里面
// 2. 写法二：(props), when printing props using console.log, 
//    props is an object. 

import axios from "axios"
import { useEffect, useState } from "react"

// unsplashkey is unique and comes from unsplash developer's App.
const unsplashKey = 'cVWfiLOQxMydkNinizISK4yfjCh_3xmO7QvoIoLB8ZA'
const unsplashURL = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateCityImg}) => {
    // define state的变量为inputName, 因为名字一变化，就调用useEffect。
    const [inputName, setInputName] = useState('Toronto');

    // 当dependencies写成[inputName]时，起到的效果是 1+2.
    // 1. when the component did mount, call search city once(callback function). 
    // dependency should be empty.
    // 2. 将inputName传到[]里面，表示 when the state(inputName) is changed, call searchCity
    // 总结下面这行代码的意思：当dependency mount(翻译成 依赖挂载)的时候，call 一次function，当inputName改变的时候，
    // 也会 call 一次 function
    // 需要搞懂的问题是：What does it mean to mount in React? What is a dependency in React?
    // 你可以去Google搜索，找个容易理解的解释。
    useEffect(()=>{searchCity(inputName)}, [inputName])

    // console.log(updateAName)

    // 在Input child 下面也显示输入的内容
    // 1. 先定义useState hook
    const [name, setName] = useState(null)
    // 2. 在onClick里面, 定义setName
    // 3. 定义一个<p>，显示在Input child下面

    // clear and obtain the input value when the Enter key is pressed down
    const keyDownHandler = event => {
        // print out "Enter" in the console
        // console.log(event.key) 
        if (event.key === 'Enter') {
            // 先用getElementById()选中id的标签，然后用select()的方法。当hit Enter键时，那就全部选中输入的内容
            // 这样重新输入内容时，不用一直按 backspace 来清空search bar
            // 英文的解释：js syntax can be used in React, when hit enter, all texts in the input box will be selected
            // using select()
            document.getElementById('myInput').select()
            // trim()的作用是处理一下对话框输入的信息，让数据更加clean，减少后端的压力。
            // 例如将两侧的空白部分去掉。
            let userInputName = event.target.value.trim().toLowerCase()
            // call searchCity() function
            // searchCity(userInputName)

            // 当用户输入信息，userInputName改变，将userInputName传入setInputName()，来update useState
            setInputName(userInputName)
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
                // console.log(results) 
                // 取出res的data的results,看devtool里面的 Console的打印结果
                // destructive nested object
                // let myResult = res.data.results
                // console.log(myResult)
                // 等同于下面的写法
                let {data: {results}} = res
                console.log(results)

                // re-organize the data structure of {results}
                // 只需要传这三个内容
                // [{des:'value', regular:'value', thumb:'value'}, {} ... {}]
                // 返回的是数组[{}]类型，里面的元素是object(README.md line 114)
                // item是指array的其中一个元素，比如说index为0的元素
                // des是自定义的, item是map里面的变量，将item这个变量下面的alt_description(这个写法是devtools里面，console显示出来的固定写法)
                // 的值，赋值给des,同理，自定义regular和thumb，取出urls里面的值
                let newRes = results.map(item => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb 
                }))
                // Check newRes in devtools' console, and it will show des, regular, thumb information
                /* 
                 des: "body of water under white cloudy sky"
                 regular: "https://images.unsplash.com/photo-1506751470038-e579eb9
                 thumb: "https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=t
                */
                console.log(newRes)
                
                // 把父亲的imageList给填补上
                updateCityImg(newRes)
            }
        )
        .catch(err => console.log(err))       
    }
 
    return (
        <div style={{border: '2px pink solid', width: '400px', height: '150px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
            <label htmlFor="">Please input a name:  </label>
            <input 
                id="myInput"
                //加一个callback function onChange， 拿到input中，用户实时输入的数据
                onChange={event => {
                    // console.log(event.target.value) 
                    // 把input输入的值，传给父亲              
                    // updateAName(event.target.value)
                    // 2. 在onClick里面, 定义setName
                    setName(event.target.value)
                }}

                // callback function onKeyDown
                onKeyDown={keyDownHandler} 

                type="text"/>
    
            <h3> {name} </h3>
            {/* 3. 定义一个<p>，显示在Input child下面 */}
            {/* <p> {name} </p> */}
        </div>
    )
}
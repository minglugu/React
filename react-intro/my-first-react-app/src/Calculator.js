// 点击按钮，增加 1，变化来自于 state 的更新

import { useState } from "react";
// 
export const Calculator = (props) => { 
    // myNumber is a state variable
    // setMyNumber is a function to update myNumber
    const [myNumber, setMyNumber] = useState(1)
    // useState 是 hook 
    
    // 比Document.getElementbyId 简单
    const increaseNum = () => {
        // 写法 1
        // setMyNumber(myNumber+1)

        // 写法 2 定义一个形参myNum，解决async的问题when updating
        setMyNumber(myNum => myNum + 1)
    }

    // check the rendering order when Calculator app is imported in App.js
    console.log('Calculator')

    return (
        <div style={{border: '2px solid'}}>
            <h3>
                Calculation result {myNumber}
            </h3>
            <h2 style={{color: 'red'}}>
                from App {props.dataFromApp}. An example of passing parent component to child one.
            </h2>
            <button onClick={increaseNum}>click me</button>

        </div>
    )
}
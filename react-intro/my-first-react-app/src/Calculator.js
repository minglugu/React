// 点击按钮，增加 1，变化来自于 state 的更新

import { useState } from "react";

export const Calculator = () => { 
    // myNumber is a state variable
    // setMyNumber is a function to update myNumber
    const [myNumber, setMyNumber] = useState(1)
    // useState 的 hook 
    
    // 比getElementbyId 简单
    const increaseNum = () => {
        // 写法 1
        // setMyNumber(myNumber+1)

        // 写法 2 定义一个形参，解决async的问题when updating
        setMyNumber(myNum => myNum + 1)
    }

    return (
        <div>
            <h3>
                Calculation result {myNumber}
            </h3>
            <button onClick={increaseNum}>click me</button>

        </div>
    )
}
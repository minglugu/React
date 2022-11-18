import { useEffect, useState } from "react";

export const Clock = () => { 
    // 写code的顺序：const和hook定义在前面。return写在下面，用来render网页的。
    
    const deps = 'AB'
    const [number, setNumber] = useState(0)

    const increaseNum = () => {
        // console.log('clock from useEffect() called me');

        // setInterval里面有callback的函数，设置了一个1秒的间隔，表示每隔1秒，call back这个函数
        setInterval(() => {
            setNumber(x => x + 1)
        }, 1000)
    }
    
    // ist param is callback function, second param is dependencies
    // 1. when the dependency is empty[], componentDidMount
    // useEffect(increaseNum, [])

    // 2. when there is no dependency, componentDidMount + componentDidUpdate
    // 每次刷新， useEffect都会update，不推荐此方法。谨慎使用。
    // useEffect(increaseNum)

    // 3. when the dep is not empty, callback run is depending on the changes of dependencies
    useEffect(increaseNum, [deps]) // 因为deps常量，没有变化，那么render 1 time
    useEffect(increaseNum, [number, deps]) // number 每次递增2，所以会update，一直render

    return (
        <div style={{border: '2px red solid'}}>
            {/* js，所以用{} */}
            {/* {console.log('clock from the return section')} */}
            <h3>
                Clock {number}
            </h3>
            <button 
                onClick={() => {
                    setNumber(x => x + 2)
            }}
            >change number</button>
        </div>
    )
}
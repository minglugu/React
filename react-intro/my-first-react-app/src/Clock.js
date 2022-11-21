import { useEffect, useState } from "react";

<<<<<<< HEAD
export const Clock = () => { 
=======
export const Clock = ({passDataFromChild}) => { 
>>>>>>> data-communication
    // 写code的顺序：const和hook定义在前面。return写在下面，用来render网页的。
    
    const deps = 'AB'
    const [number, setNumber] = useState(0)

    const increaseNum = () => {
<<<<<<< HEAD
        // console.log('clock from useEffect() called me');

        // setInterval里面有callback的函数，设置了一个1秒的间隔，表示每隔1秒，call back这个函数
        setInterval(() => {
            setNumber(x => x + 1)
        }, 1000)
=======
        
        // console.log('clock from useEffect() called me');

        // setInterval里面有callback的函数，设置了一个1秒的间隔，表示每隔1秒，call back这个函数
        // 将setInterval赋值给timerId，再return 一个call back function 叫clearInterval()
        let timerId = setInterval(() => {
            // async
            setNumber(x => x + 1)
        }, 1000)

        // component 被unmount了，会调用这个函数，防止在跳转到其它页面后，这个功能继续在set interval，而导致的内存泄露
        return (() => {
            clearInterval(timerId)
        })
>>>>>>> data-communication
    }
    
    // ist param is callback function, second param is dependencies
    // 1. when the dependency is empty[], componentDidMount
<<<<<<< HEAD
    // useEffect(increaseNum, [])
=======
     useEffect(increaseNum, [])

     // update value for async. 当number变化时，运行这个程序
     useEffect(
              () => {
                passDataFromChild(number)
              }, [number]
     )
>>>>>>> data-communication

    // 2. when there is no dependency, componentDidMount + componentDidUpdate
    // 每次刷新， useEffect都会update，不推荐此方法。谨慎使用。
    // useEffect(increaseNum)

    // 3. when the dep is not empty, callback run is depending on the changes of dependencies
<<<<<<< HEAD
    useEffect(increaseNum, [deps]) // 因为deps常量，没有变化，那么render 1 time
    useEffect(increaseNum, [number, deps]) // number 每次递增2，所以会update，一直render
=======
    // useEffect(increaseNum, [deps]) // 因为deps常量，没有变化，那么render 1 time
    // useEffect(increaseNum, [number, deps]) // number 每次递增2，所以会update，一直render
>>>>>>> data-communication

    return (
        <div style={{border: '2px red solid'}}>
            {/* js，所以用{} */}
            {/* {console.log('clock from the return section')} */}
            <h3>
                Clock {number}
            </h3>
            <button 
                onClick={() => {
<<<<<<< HEAD
                    setNumber(x => x + 2)
=======
                    setNumber(x => x + 1)
>>>>>>> data-communication
            }}
            >change number</button>
        </div>
    )
}
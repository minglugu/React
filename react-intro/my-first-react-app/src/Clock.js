import { useEffect, useState } from "react";

export const Clock = () => { 
    // 写code的顺序：const和hook定义在前面。return写在下面，用来render网页的。

    // const [number, setNumber] = useState(0)
    const increaseNum = () => {
        console.log('clock from useEffect() called me');
    }
    // ist param is callback function, second param is dependencies
    useEffect(increaseNum, [])

    return (
        <div style={{border: '2px red solid'}}>
            {/* js，所以用{} */}
            {console.log('clock from the return section')}
            <h3>
                Clock
            </h3>
        </div>
    )
}
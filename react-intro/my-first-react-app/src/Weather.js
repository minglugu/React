import './Weather.css'
import React from 'react'       // 对应的是 export default React.memo(Weather)

//1. 可以用 export 关键字，加在 const 前面，出口写完的App
//  named export
const Weather = () => {
    console.log('Weather')
    return (
        <div className="container">
            <h3>
                Weather report
            </h3>

        </div>
    )
}

// export const Weather2 = () => {
//     return (
//         <div className="container">
//             <h3>
//                 Weather report2
//             </h3>

//         </div>
//     )
// }
// export const Weather3 = () => {
//     return (
//         <div className="container">
//             <h3>
//                 Weather report3
//             </h3>

//         </div>
//     )
// }

// 2. 可以用 export default 来出口 app
//    default export
// export default Weather 

// 将 Weather 这个 component 作为一个静态页面，不管 parent component 怎么 re-render, 
// 这部分component不会re-render
export default React.memo(Weather)
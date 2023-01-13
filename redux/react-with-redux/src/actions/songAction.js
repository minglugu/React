/* action creators:
1. action is an object can be passed around. Action returns a plain JS object.
Actions are objects that have a type property (指定是哪个action，点击a或b按钮或图片) 
and any other data that it needs to describe the action.
2. action must contain type, but payload is optional. */

// redux thunk can improve action (can return function): https://github.com/reduxjs/redux-thunk
// Thunk middleware for Redux. It allows writing functions with logic inside that can interact with 
// a Redux store's dispatch and getState methods.


import { songs, FETCH_ALL_SONGS, SELECT_SONG, musicStoreUrl } from "../helpers/helper"
import axios from "axios";

// This action is to fetch all the song list
// This is the original code without adding thunk
// const fetchAllSongs = () => {
//     // todo: fetch songs
//     console.log("Fetch all songs from a fetch action.")
//     // return a plain JS object
//     return {
//         // 必须要加type
//         type: FETCH_ALL_SONGS, // do not hardcode, so save it as a constant in helper.js file
//         payload: songs
//     }
// }

// 加thunk，怎么把这个fetchAllSongs的action 去dispatch
// const fetchAllSongs = () => {
//     return dispatch => {
//         // 这个block里面，可以加各种表达式，axios，
//         // axios..
//         // dispatch(action): Dispatches an action. This is the only way to trigger a state change.
//         // URL link: https://redux.js.org/api/store#dispatchaction
//         // Please see the code segment of dispatch example.
//         // 此处{}里是action，action是个object。
//         dispatch({
//                 type: FETCH_ALL_SONGS,
//                 payload: songs
//         })
//     }
// }

//以上的fetchAllSongs，可以简化成下面的代码
// const fetchAllSongs = () => dispatch => {
//     // axios..   .then   .then来取到各种数据，用来取代helper.js中定义的常量songs
//     // 因为是举例，所以这里就用payload: songs来直接显示fetch到的所有歌曲。
//     // get 到以后，就会获取promise，用.then
//     // axios 访问 server musicStoreUrl, 返回 res。
//     axios.get(musicStoreUrl)
//         .then(
//             // 打印出来后，歌单在Object.data.data里面，有25首歌曲,是个array
//             res => {
//                 console.log(res)
//                 dispatch({
//                     type: FETCH_ALL_SONGS,
//                     payload: res.data.data
//                 })
//             }
//         )
//         .catch(error => console.log(error))

//     // dispatch({
//     //     type: FETCH_ALL_SONGS,
//     //     payload: songs
//     // })
// }

// another way to write fetchAllSongs. async and await pairs. 需要加上 try catch来捕获错误
// 不用 .then和 .catch
const fetchAllSongs = () => async dispatch => {
    try {
        let res = await axios.get(musicStoreUrl)
        dispatch({
            type: FETCH_ALL_SONGS,
            payload: res.data.data
        })
    } catch(e) {
        console.log(e);
    }
}


    // todo: fetch songs
    // console.log("Fetch all songs from a fetch action.")
    // return a plain JS object
    // return {
    //     // 必须要加type
    //     type: FETCH_ALL_SONGS, // do not hardcode, so save it as a constant in helper.js file
    //     payload: songs
    // }



// This action is to get each song.
// render 每首歌，会激活另外一个action 叫selectSong, 拿到 id
const selectSong = songid => dispatch => {
    dispatch ({
        type: SELECT_SONG, // do not hardcode, so save it as a constant in helper.js file
        // payload是传来的param，为songID
        payload: songid    
    })
}

export{
    fetchAllSongs,
    selectSong
}
// store app states; it is also an object
// concepts and rules
// immutable: reduce can only calculate the new state based on the previous state and payload. 
// You should make immutable updates
// You can't use asyn method to update the states

import { FETCH_ALL_SONGS, SELECT_SONG } from "../helpers/helper";

// 定义一个initial state，里面包含了所有的初始state。这里的变量，目前是两个states。
// 所以下面的switch，只有两个cases，对应了不同的action.type
const initialState = {
    songList: [], // 没有任何song的时候，为空
    songId: 1
}

// 如果{}， 表示state的初始值这里为空.
// ? 安全访问服务： 当全部fetch到以后，才取出所有内容
export const songReducer = (state = initialState, action) => {
    switch (action.type) {
        // 此处更新songList
        case FETCH_ALL_SONGS: 
            console.log('Print song reducer ==>', action?.payload)
            // ? called safety navigator
            // 先复制state：...state: 
            // 更新state：
            return {
                ...state,
                songList: action?.payload
            }
        // 上面是return了，所有不用加break
        // 此处更新song的id
        case SELECT_SONG:
            console.log("print selected song id ==>", action?.payload)
            return {
                ...state,
                songId: action?.payload
            }
        // switch 语句最后，有个default value
        // 如果state没有变化，那么就返回这个state本身的value
        default:
            return state
    }

}
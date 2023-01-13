import { useDispatch, useSelector } from "react-redux";
import {fetchAllSongs} from '../actions/songAction';

// 将这个PlayerConsole的component用在App里
export const PlayerConsole = () => {

    // 使用hook useSelector, 是从 store 里面，取state，这里的作用是，来找到songList。
    const songList = useSelector(state => state?.songReducer?.songList)

    // hook，dispatch. URL: https://react-redux.js.org/api/hooks
    const dispatch = useDispatch()

    return <div>
        {/* 当点击这个button的时候，就能够fetch数据库中的所有歌单，并且列出来，点击每个song之后，
            可以增加很多的onClick 事件，就能够返还该歌曲的 id，找到歌曲 */}
        <button 
        // 回调函数。也可以传参数.
        // The only way to update the state is to call dispatch(), and pass in an action object 
        // which is fetchAllSongs(). fetchAllSongs()这个function是写在functions这个文件夹下面的。
        // 该文件夹里，都是保存action相关的 JS files.
        onClick={() => dispatch(fetchAllSongs()) }
        >Fetch Songs
        </button>
        {/* <p> 返回 JSON string. JSON.stringify: convert JS object into JSON string
                如果里面什么都没有，那么打印的是空数组（[]）
        */}
        <p>{JSON.stringify(songList)}</p>
        {/* <p>{JSON.stringify(songID)}</p> */}
        
    </div>
}
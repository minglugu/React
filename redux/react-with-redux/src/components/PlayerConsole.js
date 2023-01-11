import { useDispatch, useSelector } from "react-redux";
import {fetchAllSongs} from '../actions/songAction';

// 将这个PlayerConsole的component用在App里
export const PlayerConsole = () => {

    // 使用hook useSelector, 来找到songList
    const songList = useSelector(state => state?.songReducer?.songList)

    // hook，dispatch
    const dispatch = useDispatch

    return <div>
        {/* 当点击这个button的时候，就能够fetch数据库中的所有歌单，并且列出来，点击每个song之后，
            可以增加很多的onClick 事件，就能够返还该歌曲的 id，找到歌曲 */}
        <button 
        // 也可以传参数
        onClick={() => dispatch(fetchAllSongs()) }
        >Fetch Songs</button>
        {/* <p> 返回 JSON string. JSON.stringify: convert JS object into JSON string*/}
        <p>{JSON.stringify(songList)}</p>
    </div>
}
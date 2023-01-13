import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllSongs, selectSong} from '../actions/songAction';
import './PlayerConsole.scss'

// 将这个PlayerConsole的component用在App里
export const PlayerConsole = () => {

    // 使用hook useSelector, 是从 store 里面，取state，这里的作用是，来找到songList。
    const songList = useSelector(state => state?.songReducer?.songList)

    // 从store里面，取songReducer的songId
    const songId = useSelector(state => state?.songReducer?.songId)

    // hook，dispatch. URL: https://react-redux.js.org/api/hooks
    const dispatch = useDispatch()

    // unmount, load的时候，歌曲就会全部显示. let fetch takes place after the component mounts.use useEffect
    // dependecy必须为[],否则会一直fetch。
    useEffect(() => {dispatch(fetchAllSongs())}, [])

    return <div>
        {/* 当点击这个button的时候，就能够fetch数据库中的所有歌单，并且列出来，点击每个song之后，
            可以增加很多的onClick 事件，就能够返还该歌曲的 id，找到歌曲 */}

        {/* 上面用了useEffect以后，就不需要这个button来获取歌单了。当页面加载的时候，歌曲都会全部显示 */}
        {/* <button 
        // 回调函数。也可以传参数.
        // The only way to update the state is to call dispatch(), and pass in an action object 
        // which is fetchAllSongs(). fetchAllSongs()这个function是写在functions这个文件夹下面的。
        // 该文件夹里，都是保存action相关的 JS files.
        onClick={() => dispatch(fetchAllSongs()) }
        >Fetch Songs
        </button> */}
        {/* <p> 返回 JSON string. JSON.stringify: convert JS object into JSON string
                如果里面什么都没有，那么打印的是空数组（[]）
        */}
        {/* <p>{JSON.stringify(songList)}</p> */}
        <hr/>
        
        <p>The selected ID is: {songId}</p>
        {/* unordered list, 用JS写*/}
        <ul>
            {
                // 对每一个song这个element，作为list返回。
                songList.map((song) => 
                    <li className='songContainer'
                    // id是unique的，所有要加key来确定唯一性
                    key = {song.id}
                    // click list的时候，会触发onclick事件
                    onClick={()=>
                        dispatch(selectSong(song.id))
                    }   
                    
                    >
                        {/* 还可以render album 的图片 */}
                        <img src={song.cover}/>
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                        <div>{song.length}</div>

                    </li>) 
            }
        </ul>

        {/* <p>{JSON.stringify(songID)}</p> */}
        
    </div>
}
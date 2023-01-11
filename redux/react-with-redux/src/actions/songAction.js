/* action creators:
1. action is an object can be passed around. Action returns a plain JS object.
Actions are objects that have a type property (指定是哪个action，点击a或b按钮或图片) 
and any other data that it needs to describe the action.
2. action must contain type, but payload is optional. */

import { songs, FETCH_ALL_SONGS, SELECT_SONG } from "../helpers/helper"

// This action is to fetch all the song list
const fetchAllSongs = () => {
    // todo: fetch songs
    console.log("Fetch all songs from a fetch action.")
    // return a plain JS object
    return {
        // 必须要加type
        type: FETCH_ALL_SONGS, // do not hardcode, so save it as a constant in helper.js file
        payload: songs
    }
}

// This action is to get each song.
// render 每首歌，会激活另外一个action 叫selectSong, 拿到 id
const selectSong = songID => {
    return {
        type: SELECT_SONG, // do not hardcode, so save it as a constant in helper.js file
        // payload是传来的param，为songID
        payload: songID     
    }
}

export{
    fetchAllSongs,
    selectSong
}
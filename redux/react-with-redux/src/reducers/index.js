// 必须写
import { combineReducers } from "redux";
import { songReducer } from "./songReducer";

export default combineReducers(
    {songReducer}
)
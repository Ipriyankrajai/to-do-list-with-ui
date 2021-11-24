import { combineReducers } from "redux";
import addingToDoReducer from "./addingToDoReducer";


const allReducer=combineReducers({addingToDoReducer})

export default allReducer;
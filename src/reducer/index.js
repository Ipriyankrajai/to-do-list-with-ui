import { combineReducers } from "redux";
import addingToDoReducer from "./addingToDoReducer";
import searchReducer from "./searchReducer";


const allReducer=combineReducers({addingToDoReducer,searchReducer})

export default allReducer;
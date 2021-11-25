import { searchValue } from "../action";

const initState={
    search:''
}


const  searchReducer=(state=initState,action)=>{
    switch(action.type){
        case searchValue:
            return{
                search:action.payload
            }
        default:
            return state
    }

}

export default searchReducer;
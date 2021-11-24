import {addingToDo,deleteFromToDo,editStatusFromToDo} from '../action/index.js'


const intstate={
    todos:[]
}
let globalval=0;
const addingToDoReducer=(state=intstate,action)=>{
    console.log(typeof state.todos,action.payload)
    switch(action.type){
        case addingToDo:

            return {
                todos:[...state.todos,{val:action.payload,uniquekey:globalval++,status:false}]
            }

            case deleteFromToDo:
                const newTodo=state.todos.filter(a=>{return a.uniquekey!==action.payload})
                return {
                    todos:newTodo
                }
           case editStatusFromToDo:
               let newToDo2=[]
               state.todos.forEach((i)=>{
                   if(i.uniquekey===action.payload){
                       i.status=!i.status;
                   }
                   newToDo2.push(i);

               })
               console.log(newToDo2)
               return{
                   todos:newToDo2
               }



        default:
            return state
    }

}



export default addingToDoReducer;
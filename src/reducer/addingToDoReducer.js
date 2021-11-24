import {addingToDo,deleteFromToDo,editStatusFromToDo,editNewValue} from '../action/index.js'


const intstate={
    todos:[]
}
let globalval=0;
const addingToDoReducer=(state=intstate,action)=>{
    console.log('action kya hai',action)
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
               console.log("in editstaus")
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

            case editNewValue:
                console.log("edit new val ");
               let newToDo3=[]
               state.todos.forEach((i)=>{
                   if(i.uniquekey===action.payload[0]){
                       i.val=action.payload[1];
                       console.log("reducer",i.val,action.payload.new)
                   }
                   newToDo3.push(i);

               })

               return{
                   todos:newToDo3
               }


        default:
            return state
    }

}



export default addingToDoReducer;
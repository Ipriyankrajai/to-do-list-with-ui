export const addingToDo='addingToDo';
export const deleteFromToDo='deleteFromToDo';
export const editStatusFromToDo='editStatusFromToDo';


export const addingToDoFn=(data)=>{
    return{
    type:addingToDo,
    payload:data
}
}



export const deleteFromToDoFn=(data)=>{
    return {
        type:deleteFromToDo,
        payload:data
    }
}

export const editStatusFromToDoFn=(data)=>{
    return{
        type:editStatusFromToDo,
        payload:data
    }
}
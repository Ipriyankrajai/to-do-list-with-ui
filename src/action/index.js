export const addingToDo='addingToDo';
export const deleteFromToDo='deleteFromToDo';
export const editStatusFromToDo='editStatusFromToDo';
export const editNewValue='editNewValue';

export const searchValue='searchValue';



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

export const editNewValueFn=(data)=>{

    return{
        type:editNewValue,
        payload:data
    }
}

export const searchValueFn=(data)=>{

    return{
        type:searchValue,
        payload:data
    }
}


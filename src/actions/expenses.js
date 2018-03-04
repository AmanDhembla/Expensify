import uuid from 'uuid';

export const add_Expense=({description="",amount=0,note="",createdAt=0}={})=>{
    return {
        type:"ADD_EXPENSE",
        expense:{
            id:uuid(),
            description,
            amount,
            createdAt,
            note
        }
    }
}

export const removeExpense=({id}={})=>{
    return {
        type:"REMOVE_EXPENSE",
        id
    }
}

export const editExpense=(id,updates)=>{
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
}
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, addDoc } from "firebase/firestore"; 
import db from '@/config/firebase';


type toDoType = {
    toDo:string,
    id?: string
}

const addtoDos = createAsyncThunk('todos/addtodos', async(newTodo: toDoType) => {

    try {
         const docRef = await addDoc(collection(db, "todos"), newTodo)
         return {id:docRef.id, ...newTodo}


} catch (error) {
        console.log("error adding todo", error);
        
        
    }

    }
)

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState:{toDoArr:[] as toDoType[]},
    reducers: {
        addHandle: (state, action) => {
            return state
            
        },
    },

    extraReducers: (builder:any)=>{
        builder.addCase(addtoDos.fulfilled,(state, action)=>{
            let newstate:toDoType={
                ...state,
                toDo:action.payload
            }
            return newstate
        })
    }

})


export default toDoSlice.reducer
export const {addHandle} = toDoSlice.actions
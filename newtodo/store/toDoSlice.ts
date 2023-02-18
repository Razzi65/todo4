import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, addDoc } from "firebase/firestore"; 
import db from '@/config/firebase';


type toDoType = {
    toDo:string,
    id?: string
}

const fetchtoDos = createAsyncThunk('todos/fetchtodos', async() => {

    try {
         const docRef = await addDoc(collection(db, "todos"), {
         }
        

)} catch (error) {
        console.log("error adding todo", error);
        
        
    }

    }
)

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState:{toDoArr:[] as toDoType[]},
    reducers: {
        addHandle: (state, action) => {
            
            
        }
    }

})


export default toDoSlice.reducer
export const {addHandle} = toDoSlice.actions
import { createSlice } from '@reduxjs/toolkit'

type toDoType = {
    toDo:string,
    id?: string
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState:{toDoArr:[] as toDoType[]},
    reducers: {
        addHandle: (state, action) => {
            console.log(state.toDoArr);
            
        }
    }

})


export default toDoSlice.reducer
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
            
            
        }
    }

})


export default toDoSlice.reducer
export const {addHandle} = toDoSlice.actions
import { configureStore } from '@reduxjs/toolkit'
import toDoSlice from "../store/toDoSlice"

export const store = configureStore({
    reducer: {
        toDoSlice
    }

})
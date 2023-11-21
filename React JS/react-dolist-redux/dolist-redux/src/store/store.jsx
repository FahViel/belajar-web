import { configureStore } from "@reduxjs/toolkit";
import itemReducers from '../features/GrocerySlice'


const store = configureStore({
    reducer: {
        item: itemReducers
    }
})

export default store
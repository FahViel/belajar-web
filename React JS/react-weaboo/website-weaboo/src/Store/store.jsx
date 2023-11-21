import { configureStore } from '@reduxjs/toolkit'
import dataAnimeReducers from '../features/DataAnimesSlice'

export const store = configureStore({
    reducer: {
        animesData: dataAnimeReducers
    }
})
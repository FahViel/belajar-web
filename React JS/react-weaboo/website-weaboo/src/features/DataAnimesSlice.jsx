import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAnimeDatas = createAsyncThunk('animesData/getAnimeDatas', async () => {
    const response = await axios.get('http://localhost:3000/animesData')
    return response.data
})

const animeEntity = createEntityAdapter({
    selectId: (animesData) => animesData.id
})

const dataAnimesSlice = createSlice({
    name: "animesData",
    initialState: animeEntity.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getAnimeDatas.fulfilled, (state, action) => {
            animeEntity.setAll(state, action.payload)
        })
}})

export const dataAnimeSelectors = animeEntity.getSelectors((state) => state.animesData)
export default dataAnimesSlice.reducer
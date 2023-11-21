import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const getItem = createAsyncThunk('groceryItems/getItem', async () => {
    const response = await axios.get('http://localhost:3000/groceryItems')
    return response.data
})

export const deleteItem = createAsyncThunk('groceryItem/getItem', async (id) => {
    await axios.delete(`http://localhost:3000/groceryItems/${id}`)
    return id
})

const itemEntity = createEntityAdapter({
    selectId: (groceryItems) => (groceryItems.id)
})

const itemSlice = createSlice({
    name: "item",
    initialState: itemEntity.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getItem.fulfilled, (state, action) => {
            itemEntity.setAll(state, action.payload)
        }),
        builder.addCase(deleteItem.fulfilled, (state,action) => {
            itemEntity.removeOne(state, action.payload)
        })
    }
})

export const itemSelector = itemEntity.getSelectors((state) => state.item)
export default itemSlice.reducer
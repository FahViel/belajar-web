import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

// get data from database
export const getItem = createAsyncThunk('groceryItems/getItem', async () => {
  const response = await axios.get('http://localhost:3000/groceryItems')
  return response.data
})

// handle delete data
export const deleteItem = createAsyncThunk('groceryItem/deleteItem', async (id) => {
  await axios.delete(`http://localhost:3000/groceryItems/${id}`)
  return id
})

// Handle input data
export const inputItem = createAsyncThunk('groceryItem/inputItem', async ({ name, quantity, checked }) => {
  const response = await axios.post('http://localhost:3000/groceryItems', {
    name,
    quantity,
    checked,
  })
  return response.data
})

const itemEntity = createEntityAdapter({
  selectId: (item) => item.id,
})

const itemSlice = createSlice({
  name: 'item',
  initialState: itemEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getItem.fulfilled, (state, action) => {
      itemEntity.setAll(state, action.payload)
    }),
      builder.addCase(deleteItem.fulfilled, (state, action) => {
        itemEntity.removeOne(state, action.payload)
      }),
      builder.addCase(inputItem.fulfilled, (state, action) => {
        itemEntity.addOne(state, action.payload)
      })
  }
})

export const itemSelector = itemEntity.getSelectors((state) => state.item)
export default itemSlice.reducer

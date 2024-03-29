import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const response = await axios.get('http://localhost:3000/product')
  return response.data
})

export const saveProducts = createAsyncThunk('product/saveProducts', async ({ title, price }) => {
  const response = await axios.post('http://localhost:3000/product', {
    title,
    price,
  })
  return response.data
})

export const deleteProducts = createAsyncThunk('product/deleteProducts', async (id) => {
  await axios.delete(`http://localhost:3000/product/${id}`)
  return id
})

export const updateProducts = createAsyncThunk('product/saveProducts', async ({ id, title, price }) => {
  const response = await axios.patch(`http://localhost:3000/product/${id}`, {
    id,
    title,
    price,
  })
  return response.data
})

const productEntity = createEntityAdapter({
  selectId: (product) => product.id
})

const productSlice = createSlice({
  name: 'product',
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload)
    },
    [saveProducts.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload)
    },
    [deleteProducts.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload)
    },
    [updateProducts.fulfilled]: (state, action) => {
      productEntity.updateOne(state, {id: action.payload.id, updates: action.payload})
    },
  },
})

export const productSelectors = productEntity.getSelectors((state) => state.product)
export default productSlice.reducer

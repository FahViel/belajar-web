import React from 'react'
import { useState } from 'react'
import { saveProducts } from '../features/productSlice'
import { useNavigate } from 'react-router-dom'

// Import Redux
import { useDispatch } from 'react-redux'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createProduct = async (e) => {
    e.preventDefault()
    await dispatch(saveProducts({ title, price }))
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={createProduct} className="box mt-5">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct

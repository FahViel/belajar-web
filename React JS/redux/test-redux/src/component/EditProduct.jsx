import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, productSelectors, updateProducts } from '../features/productSlice'
import { useParams, useNavigate } from 'react-router-dom'

// Import Redux
import { useDispatch, useSelector } from 'react-redux'

const EditProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const product = useSelector((state) => productSelectors.selectById(state, id))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    if (product) {
      setTitle(product.title)
      setPrice(product.price)
    }
  }, [product])

  const handleUpdate = async (e) => {
    e.preventDefault()
    await dispatch(updateProducts({ id, title, price }))
    navigate(`/`)
  }

  return (
    <div>
      <form onSubmit={handleUpdate} className="box mt-5">
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
          <button className="button is-success">Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct

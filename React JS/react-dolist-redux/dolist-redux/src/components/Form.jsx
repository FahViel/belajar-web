import { useState } from "react"

// import Redux
import { useDispatch } from "react-redux"
import {inputItem} from '../features/GrocerySlice'


export default function Form() {
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const dispatch = useDispatch()
  
  
    const quantityNum = [...Array(50)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))
  
    const addItem = (e) => {
      e.preventDefault()
      dispatch(inputItem({ name, quantity, checked: false }))
  
      setName('')
      setQuantity(1)
    }
    
  
    
    return (
      <>
        <form className="add-form" onSubmit={addItem}>
          <h3>Hari ini belanja apa kita?</h3>
          <div>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {quantityNum}
            </select>
            <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <button>Tambah</button>
        </form>
      </>
    )
  }
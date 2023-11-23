/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

// Import Redux
import { useSelector, useDispatch } from 'react-redux'
import { getItem, itemSelector, deleteItem, inputItem } from './features/GrocerySlice'

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Grocery />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <div>
      <h1>Catatan Belanjaku 📝</h1>
    </div>
  )
}

function Form() {
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState('')
  const dispatch = useDispatch()


  const quantityNum = [...Array(50)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))

  const addItem = async (e) => {
    e.preventDefault()
    await dispatch(inputItem({ name, quantity, checked: false }))

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

function Item({ item, onToggleItem }) {
  const dispatch = useDispatch()
  
  return (
    <>
      <li key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)}/>
        <span style={item.checked ? {textDecoration: `line-through`} : {}}>
          {item.quantity} {item.name}
        </span>
        <button onClick={() => dispatch(deleteItem(item.id))}>&times;</button>
      </li>
    </>
  )
}

function Grocery() {
  const dispatch = useDispatch()
  const listItems = useSelector(itemSelector.selectAll)

  useEffect(() => {
    dispatch(getItem())
  }, [dispatch])

  const [items, setItems] = useState(listItems)
  
  
  useEffect(() => {
    setItems(listItems)
  }, [listItems])

  function handleToggleItem( id ){
    setItems((items) => 
    items.map((item) => 
    (item.id === id ? {...item, checked: !item.checked} : item)))
  }


  // Handle sorted items
  const [sortBy, setSortBy] = useState('input')
  
  let sortedItems = [...items]

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    break
    
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
    break
  }

  // Handle Clears Item
  function handleClearsItems(){
    setItems([])
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} key={item.id} onToggleItem={handleToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={handleClearsItems}>Bersihkan Daftar</button>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer className="stats">Ada barang di daftar belanjaan, barang sudah dibeli (100%)</footer>
    </>
  )
}

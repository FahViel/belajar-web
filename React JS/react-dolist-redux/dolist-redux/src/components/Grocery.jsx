import { useState, useEffect } from "react"

// Import Components
import Item from "./Item"
import Footer from "./Footer"

// Import Redux
import { useSelector, useDispatch } from 'react-redux'
import { getItem, itemSelector, deleteAllItem } from '../features/GrocerySlice'


export default function Grocery() {
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

    //  Handle Clears Item
    const [clearItems, setClearsItem] = useState(listItems)

    useEffect(() => {
      setClearsItem(listItems)
    }, [listItems])

    if(clearItems.length > 0){
      setClearsItem([])
    }

    // const handleClearsItem = () => {
    //   dispatch(deleteAllItem())
    // }

    console.log(clearItems)

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
          <button onClick={setClearsItem}>Bersihkan Daftar</button>
        </div>
        <Footer items={items} />
      </>
    )
  }
import { useState, useEffect } from "react"

// Import Components
import Item from "./Item"
import Footer from "./Footer"

// Import Redux
import { useSelector, useDispatch } from 'react-redux'
import { getItem, itemSelector } from '../features/GrocerySlice'


export default function Grocery() {

  // Handle getItem from redux
    const dispatch = useDispatch()
    const listItems = useSelector(itemSelector.selectAll)
  
    useEffect(() => {
      dispatch(getItem())
    }, [dispatch])


  
    // State grocery item with data from redux store
    const [items, setItems] = useState(listItems)
  
    useEffect(() => {
      setItems(listItems)
    }, [listItems])
  



    // Handle chekclist item
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
    const clearItems = () => {
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
          <button onClick={clearItems}>Bersihkan Daftar</button>
        </div>
        <Footer items={items} />
      </>
    )
  }
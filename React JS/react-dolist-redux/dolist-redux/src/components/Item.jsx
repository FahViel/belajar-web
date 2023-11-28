
// import Redux
import { useDispatch } from "react-redux"
import { deleteItem } from "../features/GrocerySlice"

export default function Item({ item, onToggleItem }) {
  
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
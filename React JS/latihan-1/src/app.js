const root = document.querySelector(`#root`)

function App(){
  const [activity, setActivity] = React.useState(``)
  const [todos, setTodos] = React.useState([]) 

  function addTodoHandler(event){
    event.preventDefault()

    setTodos([...todos, activity])
    setActivity(``)
  }

  return (
    <div>
      <h1>Simple Todo list</h1>
      <form onSubmit={addTodoHandler}>
        <input 
        type="text" 
        placeholder="Nama Aktifitas" 
        value={activity}
        onChange={ (event) => {
          setActivity(event.target.value)
        } }/>
        <button type="submit">Tambahkan</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>
        })}
        
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, root)
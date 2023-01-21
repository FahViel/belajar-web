const root = document.querySelector(`#root`)


function App(){
  const [diKlik, setDiKlik] = React.useState(false)
  const [count, setCount] = React.useState(0)

  
  React.useEffect( () => {
    console.log(document.getElementById(`judul`))
  }, [])

  return (
  <div>
    <h1 id="judul">Hello Ini Judul</h1>

    <button onClick={ () => {
      setDiKlik(true)
    }}>
      Klik aku
    </button>

    <button onClick={ () => {
      setCount(count + 1)
    }}>
      Tambah
    </button>
    Nilai saat Ini : {count}
  </div>
  
  
  )
}

ReactDOM.render(<App />, root)
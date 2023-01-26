import './App.css'
import { Welcome2 } from './welcome.js'

function App() {
  return (
    <div className="App">
      <Welcome2 children="Welcome 1" />
      <Welcome2 children="Welcome 2" />
      <Welcome2>Saya adalah Content</Welcome2>
    </div>
  )
}

export default App

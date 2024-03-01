import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Redux
import { Provider } from 'react-redux'
import { store } from './Store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
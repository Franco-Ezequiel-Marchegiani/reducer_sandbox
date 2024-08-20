import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit</h1>
        {/* Contador */}
      </div>
    </Provider>
  )
}

export default App

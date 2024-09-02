
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
//import Contador from './components/Contador'
import { Pokemons } from './components/Pokemons'

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit</h1>
        {/* <Contador /> */}
        <Pokemons/>
      </div>
    </Provider>
  )
}

export default App

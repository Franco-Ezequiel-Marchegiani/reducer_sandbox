import { configureStore } from '@reduxjs/toolkit'
// import contadorReducer from '../reducers/contadorReducer';
import { counterSlice } from '../reducers/contadorSlice';
import { pokemonSlice } from '../reducers/pokemonSlice';
import { thunk } from 'redux-thunk';


//Es una función con un objeto, le pasamos una configuración o reducer
const store = configureStore({
    reducer:{
        //contador: contadorReducer,
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
//Explicación:
//getDefaultMiddleware() es una función proporcionada por @reduxjs/toolkit que retorna la lista de middlewares predeterminados.
//.concat(thunk) agrega thunk a esa lista, asegurando que se aplique junto con los otros middlewares predeterminados.
export default store;
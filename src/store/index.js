import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducers/contadorReducer';

//Es una función con un objeto, le pasamos una configuración o reducer
const store = configureStore({
    reducer:{
        contador: contadorReducer,
        //carrito: reducerCarrito,

    }
})

export default store;
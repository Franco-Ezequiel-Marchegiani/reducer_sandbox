import { configureStore } from '@reduxjs/toolkit'

//Es una función con un objeto, le pasamos una configuración o reducer
const store = configureStore({
    reducer:{
        //contador: reducerContador,
        //carrito: reducerCarrito,

    }
})

export default store;
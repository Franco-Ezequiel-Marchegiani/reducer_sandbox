import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../reducers/contadorReducer';
import { counterSlice } from '../reducers/contadorSlice';

//Es una función con un objeto, le pasamos una configuración o reducer
const store = configureStore({
    reducer:{
        //contador: contadorReducer,
        contador: counterSlice,

    }
})

export default store;
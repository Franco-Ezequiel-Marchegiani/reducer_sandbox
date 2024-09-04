import {all} from 'redux-saga/effects'
import watchGetPokemons from './saga'

// Esto permite ejecutar más de un saga, los necesarios
export default function* rootSaga(){
    yield all([
        watchGetPokemons(),
    ])
}
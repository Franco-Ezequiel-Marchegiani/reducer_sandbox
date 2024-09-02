import {put, call, takeEvery} from 'redux-saga/effects'
import { loadingPokemons } from '../reducers/pokemonSlice';
// Servicio para traer los datos de la API de Pokemons

const fetchPokemons = (page = 0) =>{
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    const data = resp.json
    return data;
}

// Saga para obtener los datos
//El * es nativo de js, es una función "generadora"
function* getPokemons(action) {
    const page = action.payload

    try{
        yield put(loadingPokemons())

        // Obtener los datos de la API, y colocar en el state
        const data = yield call(fetchPokemons, page)
        
        // Guardamos data en el store si está todo ok
        yield put(fetchPokemons({pokemons: data.results, page: page}))

    }catch (error){
        console.log(error);
        yield put(failedFetch({error: error.message}))
    }
    
}

// Saga principal para observar la acción de "getPokemons"
function* watchGetPokemons(){
    //El nombre debe ser el mismo que la función slice "pokemonSlice"
    yield takeEvery('pokemon/fetchPokemons')
}
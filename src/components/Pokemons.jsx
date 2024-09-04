import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { getPokemons } from "../thunk/thunk"
import { fetchingPokemons } from "../reducers/pokemonSlice"

export const Pokemons = () =>{
    
    const [localPage, setLocalPage] = useState(0)

    const {isLoading, pokemons = [], page, error} = useSelector(state => state.pokemons)
    
    console.log(isLoading, pokemons, page, error);
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(fetchingPokemons(localPage))
        // dispatch(getPokemons(localPage))
    },[localPage, dispatch])
    
    return (
        <div>
            <h1>Pokemons</h1>
            {error && <p>Algo salió mal</p> }
            {isLoading && <p>Cargando ...</p> }
            <div>
                {pokemons.map((pokemon) =>(
                    
                    <p key={pokemon.name}>{pokemon.name}</p>
                ))}
            </div>
            <button onClick={() => setLocalPage(localPage + 1)}>Next Page</button>
        </div>
    )
}
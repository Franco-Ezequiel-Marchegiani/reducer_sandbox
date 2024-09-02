import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../thunk/thunk"

export const Pokemons = () =>{
    
    const {isLoading, pokemons = [], page, error} = useSelector(state => state.pokemons)
    
    
    
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getPokemons())
    },[dispatch])
    console.log(isLoading, pokemons, page, error);
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
            <button onClick={() => dispatch(getPokemons(page))}>Next Page</button>
        </div>
    )
}
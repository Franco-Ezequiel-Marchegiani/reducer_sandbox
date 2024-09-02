import { failedFetch, fetchPokemons, loadingPokemons } from "../reducers/pokemonSlice"
//El thunk es una función que retorna otra función

//En caso de que no se pase el page, su valor va a ser 0
export const getPokemons = (page = 0) =>{
    
    return async(dispatch) => {
        
        //Ejecutamos la función reducer de 'loadingPokemons' para que se ejecute y pase el isLoading a valor true
        dispatch(loadingPokemons())

        //Hacemos la llamada a la API para traer la info
        try {
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
            const data = await response.json()
            console.log(data);
            
            //Coocamos los datos de los pokemons en mi state: fetchPokemons
            dispatch(fetchPokemons({pokemons: data.results, page: page + 1}))
        } catch (error) {
            console.log(error);
            
            dispatch(failedFetch({error: error}))
        }
        

        //En caso de que falle, ejecutamos la acción con el mensaje
    }
}
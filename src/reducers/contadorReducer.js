import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types"

//Estado Inicial
const initialState = {
    contador: 0
}

// Reducer sería una función pura
export default function contadorReducer(state = initialState, action){

    //Creamos un switch, el cual varía su cambio en el state según lo que traiga el prop "action"
    //Exportamos el "Type" del archivo "index.js | Types"
    //Esto para que la info esté centrada en un mismo lugar
    switch(action.type){
        case INCREMENT: {
            return {
                ...state,
                contador: state.contador + 1
            }
        }
        case INCREMENT_5: {
            return {
                ...state,
                contador: state.contador + action.payload //Hacemos que sume lo que el usuario coloque
            }
        }
        case DECREMENT: {
            return {
                ...state,
                contador: state.contador -1
            }
        }
        case DECREMENT_5: {
            return {
                ...state,
                contador: state.contador - action.payload //Hacemos que reste lo que el usuario coloque
            }
        }
        case RESET:{
            return{
                ...state,
                contador: 0
            }
        }

        default:
            return state
    }
     
}
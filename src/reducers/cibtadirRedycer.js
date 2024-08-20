
//Estado Inicial
const initialState = {
    contador: 0
}

// Reducer sería una función pura
export default function contadorReducer(state = initialState, action){

    //Creamos un switch, el cual varía su cambio en el state según lo que traiga el prop "action"
    switch(action.type){
        case "INCREMENTAR": {
            return {
                ...state,
                contador: state.contador + 1
            }
        }
        case "DECREMENTAR": {
            return {
                ...state,
                contador: state.contador -1
            }
        }
        case "INCREMENTAR_5": {
            return {
                ...state,
                contador: state.contador + action.payload //Hacemos que sume lo que el usuario coloque
            }
        }
        case "DECREMENTAR_5": {
            return {
                ...state,
                contador: state.contador - action.payload //Hacemos que reste lo que el usuario coloque
            }
        }
        case "RESET":{
            return{
                ...state,
                contador: 0
            }
        }

        default:
            return state
    }
     
}
import { useDispatch, useSelector } from "react-redux";
//import { reset, restar, restar_5, sumar, sumar_5 } from "../actions/contadorActions";
import { decrement, decrement5, reset, increment, increment5 } from "../reducers/contadorSlice";

//SHORTCUT: rafce
const Contador = () => {

    //Accedemos al estado del "store"
    //Ambas opciones son válidas
    // const state = useSelector((state) => state.contador)
    const state = useSelector((state) => state.contador.contador)
    console.log(state);

    //Despachar acciones
    const dispatch = useDispatch()
    
  return (
    <div>
        <h2>Contador con Redux</h2>
        <p>{state} </p>
        <nav>
            {/* <button onClick={() => dispatch(sumar_5())}>+5</button>
            <button onClick={() => dispatch(sumar())}>+1</button>
            <button onClick={() => dispatch(reset())}>0</button>
            <button onClick={() => dispatch(restar())}>-1</button>
            <button onClick={() => dispatch(restar_5())}>-5</button> */}
            
            <button onClick={() => dispatch(increment5(5))}>+5</button>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(reset())}>0</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(decrement5(5))}>-5</button>
        </nav>
    </div>
  )
};

export default Contador;

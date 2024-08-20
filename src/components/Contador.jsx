import { useDispatch, useSelector } from "react-redux";
import { reset, restar, restar_5, sumar, sumar_5 } from "../actions/contadorActions";

//SHORTCUT: rafce
const Contador = () => {

    //Accedemos al estado del "store"
    const state = useSelector((state) => state.contador)
    console.log(state);

    //Despachar acciones
    const dispatch = useDispatch()
    
  return (
    <div>
        <h2>Contador con Redux</h2>
        <p>{state.contador} </p>
        <nav>
            <button onClick={() => dispatch(sumar_5())}>+5</button>
            <button onClick={() => dispatch(sumar())}>+1</button>
            <button onClick={() => dispatch(reset())}>0</button>
            <button onClick={() => dispatch(restar())}>-1</button>
            <button onClick={() => dispatch(restar_5())}>-5</button>
        </nav>
    </div>
  )
};

export default Contador;

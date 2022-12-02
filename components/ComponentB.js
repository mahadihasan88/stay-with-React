import { useContext } from "react";
import {CounterContext} from '../App';

function ComponentB(){
    const countContext=useContext(CounterContext);
    return(
        <div>
         <button type="button" onClick={()=>countContext.counterDispatch('Increment')}>Increment</button>

         <button type="button" onClick={()=>countContext.counterDispatch('Decrement')}>Decrement</button>

        </div>
    )
}
export default ComponentB;
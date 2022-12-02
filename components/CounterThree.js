import { useReducer } from "react";

let initial=0;
const initial2=10;
const reducer=(state,action)=>{
    switch(action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1

         default:
            return state;      

    }

}
function CounterThree(){
    const [count,dispatch]=useReducer(reducer,initial);
    const [count2,dispatch2]=useReducer(reducer,initial2);
    return(
        <div>
        <div>
            <h2>count-{count}</h2>
            <button type="button" onClick={()=>dispatch('Increment')}>Increment</button>

            <button type="button" onClick={()=>dispatch('Decrement')}>Decrement</button>

        </div>

        <div>
            <h2>count-{count2}</h2>
            <button type="button" onClick={()=>dispatch2('Increment')}>Increment</button>

            <button type="button" onClick={()=>dispatch2('Decrement')}>Decrement</button>

        </div>
        </div>
    )
}
export default CounterThree;
import { useReducer } from "react";

let initial=0;
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
function Counter(){
    const [count,dispatch]=useReducer(reducer,initial);
    return(
        <div>
            <h2>count-{count}</h2>
            <button type="button" onClick={()=>dispatch('Increment')}>Increment</button>

            <button type="button" onClick={()=>dispatch('Decrement')}>Decrement</button>

        </div>
    )
}
export default Counter;
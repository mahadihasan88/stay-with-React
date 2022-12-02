import React from "react";
import { useReducer } from "react";
import ComponentA from './components/ComponentA';
export const CounterContext=React.createContext();
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

function App(){
 
 const [count,dispatch]=useReducer(reducer,initial);
    return(
        <div className="App">
            <h2>count-{count}</h2>
            <CounterContext.Provider value={{counterDispatch:dispatch}}>
                <ComponentA/>
            </CounterContext.Provider>
         
        

        </div>
    )
    
  
}
export default App;
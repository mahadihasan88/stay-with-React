import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);
 const   toIncrementCount=()=> (setCount ((prevCount)=> prevCount+1))

 const toAddTen=()=>{
    let i=0;
    while (i<10) {
        setCount((prevCount)=>prevCount+1);
        i++;
    }

 }
    
      
    return (
        <div>
                <p>{count}</p>
            <button type="button" value={count} onClick={toIncrementCount}>
                Click the button For Times</button>
                <button type="button"value={count} onClick={toAddTen}>Add 10</button>
            

        </div>
    )
}
export default Counter;
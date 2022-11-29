
import React, {useCallback, useMemo, useState} from "react";
import Tittle from "./components/Tittle";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
function App(){
  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  
  const IncrementByOne=useCallback(()=>{
    setCount1((prevCount)=>prevCount+1);
  },[]);
  const IncrementByFive=useCallback(()=>{
    setCount2((prevCount)=>prevCount+5);
  },[]);

  const isEventOrOdd=useMemo(()=>{
    let i=0;
    while(i<1000000000){i++;}
          return (count1%2===0);
     },[count1]);

  return(
    <div>
      
      <Tittle/>
          <p>Count Number is : {isEventOrOdd? 'even':'odd'}</p>
      <ShowCount count={count1} tittle="Counter 1"/>
      <Button handleClick={IncrementByOne}>IncrementByOne</Button>
      <hr/>
      <ShowCount count={count2} tittle="Counter 2"/>
      <Button handleClick={IncrementByFive}>IncrementByFive</Button>
    </div>
  )

}
export default App;
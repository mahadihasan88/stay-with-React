import { useEffect, useState } from "react"

function MyComponent(){
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());

   const Tick=()=>{
            setDate(new Date());
    }

 const   addClick=()=>{
        setCount((prevCount)=>prevCount+1)
    }

    useEffect(()=>{
        console.log('Updating Document Title');
        document.title =`Click Updated ${count} Times`;   
    },[count]);

    useEffect(()=>{
        console.log("Starting Time");
        const interval= setInterval(Tick, 1000);
        return ()=>{
            //console.log('component Unmount');
            clearInterval(interval);
    }
    },[])

    return(
        <div>
       <p>Hellow Bangldesh</p>
      
       <p> Time : {date.toLocaleTimeString()}</p>
       <button type="button" value={count} onClick={addClick}>Click {count} Here</button>
        </div>
    )
}
export default MyComponent
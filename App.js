
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";


import Counter from "./components/Counter";
function App(){
 
  return (
    <div className="app">
     
     <Counter render={(count,countChangeEvent)=>
     <ClickCounter count={count} countChangeEvent={countChangeEvent}/>}/>
   
   <Counter render={(count,countChangeEvent)=>
     <HoverCounter count={count} countChangeEvent={countChangeEvent}/>}/>

    </div>

  )
  }
export default App;
import React, { useState } from "react";
import MyComponentClass from "./components/MyComponentClass";

import MyComponent from "./components/MyComponent";

function App (){
  const [show,setShow]=useState(true);

    return(
      <div className="App">

       <p>Learning useEffect all equipment</p>

      <div> {show && <MyComponent/>}</div> 

      <button type="button" onClick={()=> setShow((prevCount)=>!prevCount)}>
        {show? 'Hide':'Show'}</button>


{/* <MyComponentClass/> */}
         
      </div>
    )
  
}
export default App;
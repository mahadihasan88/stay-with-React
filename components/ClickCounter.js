
import React from "react";
import withCounter from "./HOC/withCounter";

const  ClickCounter=(props)=> {
   
        const {count,toChangeCount}=props;
       
        return(
            <div>
                <button type="button" onClick={toChangeCount}>Enter the button {count} Times</button>

            </div>
        )
    }

export default withCounter(ClickCounter);

import React from "react";
import withCounter from "./HOC/withCounter";

const  HoverCounter=(props)=> {
   
    
        const {count,toChangeCount}=props;
        return(
            <div>
                <h2  onMouseOver={toChangeCount}>Hover the title {count} Times </h2>

            </div>
        )
    }

export default withCounter(HoverCounter);
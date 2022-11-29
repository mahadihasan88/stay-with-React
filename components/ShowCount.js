import React from "react";
function ShowCount({count ,tittle}){
    console.log(`Rendering .... ${tittle}`);
    return(
        <div>
            <p>{tittle} is {count}</p>
        </div>
    )
}
export default React.memo(ShowCount);
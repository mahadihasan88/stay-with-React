import React from "react";
function Tittle(){
    return(
        <div>
           { console.log('rendering Title......')}
            <p>Use Callback Hook Learning</p>
        </div>
    )
}
export default React.memo(Tittle) ;
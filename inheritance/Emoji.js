
import React from "react";

class Emoji extends React.Component{
    addEmoji=(text,Emoji)=>`${Emoji}  ${text}  ${Emoji}`;

    
    render(override){
        let text="This is a Emoji component"
    
                if(override) text=override;
                
          return <div> {text}</div>  
         
    }  
    
}
export default Emoji;
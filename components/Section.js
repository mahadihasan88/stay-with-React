import React from "react";
import Round1 from "./Round1";
import ContextHandler from "./createContext";

class Section extends React.Component{
    state={
        theme:'black'
    }
    ChangeTheme=()=>{
        this.setState({
           theme: this.state.theme === 'black'? 'light' :'black'
         
        })  
    }
    render(){
        const {theme}=this.state;
      
        return (
            <div>
                <ContextHandler.Provider value={{theme,ChangeTheme:this.ChangeTheme}}>
                <Round1/>
                </ContextHandler.Provider>
            </div>
        )
    }
}
export default Section;
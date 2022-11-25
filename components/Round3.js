
import ContextHandler from "./createContext";
import FinalRound from "./FinalRound";
import React from "react";

class Round3 extends React.Component{

    render(){
        const {theme, ChangeTheme}=this.context;
        return (
            <div>
                <FinalRound theme={theme} ChangeTheme={ChangeTheme}/>
            </div>
        )
    }
}
Round3.contextType=ContextHandler;

export default Round3;
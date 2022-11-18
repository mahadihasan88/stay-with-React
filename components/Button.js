import React from "react";

class Button extends React.Component{
  shouldComponentUpdate(nextprops){
    const {change:currentChange,locale:currentlocale }=this.props;   
    const {change:nextChange,locale:nextlocale}=nextprops;
    if(currentChange===nextChange&& currentlocale===nextlocale){return false}
    else {return true}
  }

    render(){
 
      const {change,locale,show,enable}=this.props;
      if(!enable)return null;
        return (
            <div>
            <button type="button"onClick={()=>change(locale)}>{locale==='bn-BD'?"Change Clock":"ঘড়ি পরিবর্তন করুন"
            }</button>
           {show && <p>Helow</p>}
            </div>
        )
    }
}


export default Button;
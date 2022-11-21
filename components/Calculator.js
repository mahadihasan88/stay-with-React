import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/Converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component{
    state={
        temperature:'',
        scale:'c'
    }
    handleChange=(event,scale)=>{
  this.setState({
    temperature:event.target.value,
    scale,
  })
    }
    render(){
        const {temperature,scale}=this.state;
        const celsius=scale==='f'?convert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?convert(temperature,toFahrenheit):temperature;
        return(
            <div>
                {/* <input type="text" value={temperature} onChange={this.handleChange}></input> */}
                <TemperatureInput scale="c" temperature={celsius} toTemperatureChange={this.handleChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit}   toTemperatureChange={this.handleChange}/>
                <BoilingVerdict temp={parseFloat(celsius)}></BoilingVerdict>
            </div>
        )
    }
}
export default Calculator;
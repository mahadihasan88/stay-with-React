

const scaleName={
  c:'celsius',
  f:'fahrenheit'
}
function TemperatureInput({scale,temperature,toTemperatureChange}){

return(
  <fieldset>
    <legend>Enter your Input in {scaleName[scale]}</legend>
<input type="text" value={temperature} onChange={(event)=>{toTemperatureChange(event,scale)}}></input>
</fieldset>
)
}
export default TemperatureInput;


const scaleName={
    c:'celsius',
    f:'fahrenheit'
     }
export default function TemperatureInput ({scale,temperature,onTemperatureChange}){

        return(
         
            <fieldset>
            <legend>Enter Number in {scaleName[scale]} </legend>

          <input type="text" value={temperature} onChange={(e)=>{
            onTemperatureChange(e,scale);
          }}></input>
         
          </fieldset>
          
        )
   
       
    }
    

